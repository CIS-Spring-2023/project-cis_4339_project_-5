<script>
import { DateTime } from "luxon";
import axios from "axios";
import AttendanceChart from "./barChart.vue";
import ZipChart from "./zipChart.vue";
const apiURL = import.meta.env.VITE_ROOT_API;
import { useLoggedInUserStore } from "@/store/loggedInUser";
export default {
  setup() {
    const store = useLoggedInUserStore();
    return { store };
  },
  components: {
    AttendanceChart,
    ZipChart,
    ZipChart,
  },
  data() {
    return {
      recentEvents: [],
      attendanceChart: {
        labels: [],
        data: [],
      },
      pieChartData: {},
      loading: false,
      error: null,
    };
  },
  mounted() {
    this.getAttendanceData();
  },
  methods: {
    async getAttendanceData() {
      try {
        this.loading = true;
        this.error = null;
        let endpoints = [`${apiURL}/events/attendance`, `${apiURL}/clients`];

        // use axios all to fetch concurrent data
        const response = await axios.all(
          endpoints.map((endpoint) => axios.get(endpoint))
        );
        let responseEvents = response[0];
        let responseclients = response[1];

        // events
        this.recentEvents = responseEvents.data;

        // create/filter attendance chart data
        this.attendanceChart.labels = responseEvents.data.map(
          (item) => `${item.name} (${this.formattedDate(item.date)})`
        );
        this.attendanceChart.data = responseEvents.data.map(
          (item) => item.attendees.length
        );

        // create/filter piechart data
        responseclients.data.forEach((element) => {
          this.pieChartData[element.address.zip] = this.pieChartData[
            element.address.zip
          ]
            ? this.pieChartData[element.address.zip] + 1
            : 1;
        });
      } catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          this.error = {
            title: "Server Response",
            message: err.message,
          };
        } else if (err.request) {
          // client never received a response, or request never left
          this.error = {
            title: "Unable to Reach Server",
            message: err.message,
          };
        } else {
          // There's probably an error in your code
          this.error = {
            title: "Application Error",
            message: err.message,
          };
        }
      }
      this.loading = false;
    },

    formattedDate(datetimeDB) {
      const dt = DateTime.fromISO(datetimeDB, {
        zone: "utc",
      });
      return dt
        .setZone(DateTime.now().zoneName, { keepLocalTime: true })
        .toLocaleString();
    },
    // method to allow click through table to event details
    editEvent(eventID) {
      this.$router.push({ name: "eventdetails", params: { id: eventID } });
    },
  },
};
</script>

<template>
  <main>
    <div v-if="!loading">
      <h1
        class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
      >
        Welcome
      </h1>
      <br />
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
      >
        <div class="ml-10"></div>
        <div class="flex flex-col col-span-2">
          <table class="min-w-full shadow-md rounded">
            <thead class="bg-gray-50 text-xl">
              <tr class="p-4 text-left">
                <th class="p-4 text-left">Event Name</th>
                <th class="p-4 text-left">Event Date</th>
                <th class="p-4 text-left">Number of Attendees</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-300">
              <tr
                @click="editEvent(event._id)"
                v-for="event in recentEvents"
                :key="event._id"
              >
                <td class="p-2 text-left">{{ event.name }}</td>
                <td class="p-2 text-left">{{ formattedDate(event.date) }}</td>
                <td class="p-2 text-left">{{ event.attendees.length }}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <br />
            <h1
              class="font-bold text-2xl text-red-700 tracking-widest text-center mt-5 mb-5"
            >
              Attendess by Event
            </h1>
            <AttendanceChart
              v-if="!loading && !error"
              :label="attendanceChart.labels"
              :chart-data="attendanceChart.data"
            ></AttendanceChart>

            <!-- Start of error alert -->
            <div class="mt-12 bg-red-50" v-if="error">
              <h3 class="px-4 py-1 text-4xl font-bold text-white bg-red-800">
                {{ error.title }}
              </h3>
              <p class="p-4 text-lg font-bold text-red-900">
                {{ error.message }}
              </p>
            </div>
            <!-- End of error alert -->
          </div>
          <!--Start of pie chart insertion-->
          <div>
            <br />
            <h1
              class="font-bold text-2xl text-red-700 tracking-widest text-center mt-5 mb-5"
            >
              Clients by zip code
            </h1>
            <ZipChart v-if="!loading && !error" :zipCodeData="pieChartData" />
            <br />
          </div>
          <!--End of pie chart insertion-->
        </div>
      </div>
    </div>

    <!-- Start of loading animation -->
    <div class="mt-40" v-if="loading">
      <p class="text-6xl font-bold text-center text-gray-500 animate-pulse">
        Loading...
      </p>
    </div>
    <!-- End of loading animation -->
  </main>
</template>
