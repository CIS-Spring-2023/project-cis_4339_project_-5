<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import axios from "axios";
const apiUrl = import.meta.env.VITE_ROOT_API;
import { useLoggedInUserStore } from "@/store/loggedInUser";
import { services } from "../mock_data";

export default {
  // define service props
  props: ["id"],
  setup() {
    // call the store to get user login status and create validtor object to hold calidatrion error data
    const user = useLoggedInUserStore();
    return { user, v$: useVuelidate({ $autoDirty: true }) };
  },
  data() {
    return {
      // create a varible to hold the current service state
      currentService: { id: "", title: "", active: "" },
    };
  },
  // call endpont to get the service using route param: id
  created() {
    axios.get(`${apiUrl}/todos/${this.$route.params.id}`).then((res) => {
      console.log(res);
      this.currentService = services.filter(
        (s) => (s._id = this.$route.params.id)
      )[0];
    });
  },
  methods: {
    async saveUpdates() {
      const isValid = await this.v$.$validate();
      if (isValid) {
        axios.put(`${apiUrl}/todos/${this.currentService.id}`).then((res) => {
          console.log(res);
          alert("Updated srevice");
          this.$router.push("/services");
        });
      }
    },
  },
  validations() {
    // validations for new service
    return {
      currentService: {
        title: { required },
        active: { required },
      },
    };
  },
};
</script>

<template>
  <!-- editor need to be logged in create servicve else redirec to login page -->
  <main class="px-2" v-if="user.EisLoggedIn">
    <div>
      <h1
        class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
      >
        Edit Service
      </h1>
    </div>
    <div class="mx-auto flex flex-col items-top md:flex-row pt-10">
      <div class="w-fit my-4 md:ml-10 md:my-0">
        <h2 class="text-2xl font-bold pt-2 md:w-full">Edit Service Info</h2>
        <p class="text-gray-500 italic">
          Modify service details and save to update
        </p>
      </div>
      <div class="w-full max-w-lg md:ml-10">
        <label class="block w-full">
          <span class="text-gray-700">Servie Title</span>
          <span style="color: #ff0000">*</span>
          <input
            type="text"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 hover:cursor-pointer"
            placeholder
            v-model="currentService.title"
          />
          <span class="text-black" v-if="v$.currentService.title.$error">
            <p
              class="text-red-700"
              v-for="error of v$.currentService.title.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}!
            </p>
          </span>
        </label>
        <label class="block w-full mt-5">
          <span class="text-gray-700">Servie Status</span>
          <span style="color: #ff0000">*</span>
          <select
            v-model="currentService.active"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 hover:cursor-pointer"
            name="completed"
            id=""
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
          <span class="text-black" v-if="v$.currentService.active.$error">
            <p
              class="text-red-700"
              v-for="error of v$.currentService.active.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}!
            </p>
          </span>
        </label>
        <div class="w-full mt-10 flex space-x-5">
          <button
            @click="saveUpdates()"
            class="bg-green-700 text-white rounded hover:bg-green-600"
            type="submit"
          >
            Save Changes
          </button>

          <button
            @click="$router.back()"
            class="bg-red-700 text-white rounded hover:bg-red-600"
          >
            Cancel & Go Back
          </button>
        </div>
      </div>
    </div>
  </main>
  <!-- redirect to login page -->
  <div v-else>
    {{ $router.push("/login") }}
  </div>
</template>
