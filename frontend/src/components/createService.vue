<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import axios from "axios";
const apiUrl = import.meta.env.VITE_ROOT_API;
import { useLoggedInUserStore } from "@/store/loggedInUser";

export default {
  props: ["id"],

  setup() {
    // callt he userLoggediSore to checkif user is logged in
    const user = useLoggedInUserStore();
    return { user, v$: useVuelidate({ $autoDirty: true }) };
  },
  data() {
    return {
      // create a varible to hold the current service state
      newService: {
        id: 151,
        todo: "",
        completed: true,
        userId: 5,
      },
    };
  },
  methods: {
    async createService() {
      const isValid = await this.v$.$validate();
      if (isValid) {
        axios.post(`${apiUrl}/todos/add`, this.newService).then((res) => {
          console.log(res);
          alert("Added new srevice");
          this.$router.push("/services");
        });
      }
    },
  },
  validations() {
    return {
      newService: {
        todo: { required },
        completed: { required },
      },
    };
  },
};
</script>

<template>
  <main class="px-2" v-if="user.EisLoggedIn">
    <div>
      <h1
        class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
      >
        Add Service
      </h1>
    </div>
    <div class="mx-auto flex flex-col items-top md:flex-row pt-10">
      <div class="w-fit my-4 md:ml-10 md:my-0">
        <h2 class="text-2xl font-bold pt-2 md:w-full">Create a new service</h2>
        <p class="text-gray-500 italic">
          Fill the form and submit to create a new service
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
            v-model="newService.todo"
          />
          <span class="text-black" v-if="v$.newService.todo.$error">
            <p
              class="text-red-700"
              v-for="error of v$.newService.todo.$errors"
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
            v-model="newService.completed"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 hover:cursor-pointer"
            name="completed"
            id=""
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </label>
        <div class="w-full mt-10 flex space-x-5">
          <button
            @click="createService()"
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
  <div v-else>
    {{ $router.push("/login") }}
  </div>
</template>
