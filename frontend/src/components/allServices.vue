<script>
import axios from "axios";
const apiURL = import.meta.env.VITE_ROOT_API;
import { useLoggedInUserStore } from "@/store/loggedInUser";
import { services } from "../mock_data";
export default {
  data() {
    return {
      // create a list of services and asssing fake services data
      servicesList: [],
    };
  },
  created() {
    // this fetches the services fro aback end , not acllintg because apis is not available
    this.getServices();
  },
  methods: {
    // method to fetch all the services on load. not working because not api is available atm
    getServices() {
      axios.get(`${apiURL}/services`).then((res) => {
        this.servicesList = res.data;
      });
    },
    // this routes to edit srecvice apge for selected service
    editService(serviceID) {
      this.$router.push({ name: "editservice", params: { id: serviceID } });
    },

    // disableService(serviceID) {
    //   axios.delete(`${apiURL}/todos/${serviceID}`, this.toDisable).then((res) => {
    //     console.log(res);
    //     alert('Disabled the srevice');
    //     this.$router.push('/services');
    //   });
    // },
  },
  setup() {
    // import store from pinia to check if user logged in
    const user = useLoggedInUserStore();
    return { user };
  },
};
</script>

<template>
  <!-- Check if user is logged in as viewer or editor, if yes render the tamplate else redirect to login page -->
  <main v-if="user.EisLoggedIn || user.VisLoggedIn">
    <div>
      <h1
        class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
      >
        Services
      </h1>
    </div>

    <div class="mx-auto flex flex-col items-top md:flex-row pt-10">
      <div class="w-fit px-2 my-4 md:ml-10 md:my-0">
        <h2 class="text-2xl font-bold pt-2 md:w-full">List of Services</h2>
        <p class="text-gray-500 italic">
          Click on an action to edit or disable a service
        </p>
      </div>
      <div class="w-full px-2 flex flex-col max-w-4xl">
        <table class="min-w-full shadow-md rounded">
          <thead class="bg-gray-50 text-xl">
            <tr>
              <th class="py-4 px-2 w-3/4 text-left">Service Title</th>
              <th class="py-4 w-fit text-left">Status</th>
              <th class="py-4 w-fit text-left" v-if="user.EisLoggedIn">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-250">
            <tr
              v-for="service in servicesList"
              :key="service._id"
              class="hover:text-black hover:cursor-pointer"
            >
              <td class="p-2 w-3/4 text-left">{{ service.name }}</td>
              <td class="p-2 w-fit text-left">
                {{ service.active ? "Active" : "Inactive" }}
              </td>
              <td class="p-2" v-if="user.EisLoggedIn">
                <span
                  @click="editService(service._id)"
                  class="material-icons text-gray-500 hover:cursor-pointer hover:text-black mr-4"
                  >edit</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
  <!-- if not logged in, redaired to login page. -->
  <div v-else>
    {{ $router.push("/login") }}
  </div>
</template>
