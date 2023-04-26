<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import axios from "axios";
const apiUrl = import.meta.env.VITE_ROOT_API;
import { useLoggedInUserStore } from "@/store/loggedInUser";

export default {
  // define service props
  props: ["id"],
  setup() {
    // call the store to get user login status and create validtor object to hold calidatrion error data
    const store = useLoggedInUserStore();
    return { store, v$: useVuelidate({ $autoDirty: true }) };
  },
  data() {
    return {
      // create a varible to hold the current service state
      currentService: { name: "", active: false },
    };
  },
  // call endpont to get the service using route param: id
  created() {
    this.getService();
  },
  methods: {
    getService() {
      axios
        .get(`${apiUrl}/services/id/${this.$route.params.id}`)
        .then((res) => {
          this.currentService = res.data;
        });
    },
    async updateService() {
      const isValid = await this.v$.$validate();
      if (isValid) {
        axios
          .put(
            `${apiUrl}/services/update/${this.currentService._id}`,
            this.currentService
          )
          .then((res) => {
            alert("Updated srevice");
            this.$router.push("/services");
          });
      } else {
        alert("err");
      }
    },
  },
  validations() {
    // validations for new service
    return {
      currentService: {
        name: { required },
        active: { required },
      },
    };
  },
};
</script>

<template>
  <!-- editor need to be logged in create servicve else redirec to login page -->
  <main class="px-2" v-if="store.user.loggedIn && store.user.role == 'editor'">
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
            v-model="currentService.name"
          />
          <span class="text-black" v-if="v$.currentService?.name?.$error">
            <p
              class="text-red-700"
              v-for="error of v$.currentService.name.$errors"
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
          <span class="text-black" v-if="v$.currentService?.active?.$errors">
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
            @click="updateService()"
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
