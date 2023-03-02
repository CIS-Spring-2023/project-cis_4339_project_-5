<script>
import axios from 'axios';
const apiUrl = import.meta.env.VITE_ROOT_API;

export default {
  props: ['id'],
  data() {
    return {
      // create a varible to hold the current service state
      currentService: {
        id: 151,
        todo: 'Use DummyJSON in the project',
        completed: false,
        userId: 5,
      },
    };
  },
  methods: {
    createService() {
      axios.post(`${apiUrl}/todos/add`, this.currentService).then((res) => {
        console.log(res);
        alert('Added new srevice');
        this.$router.push('/services');
      });
    },
  },
};
</script>

<template>
  <main class="px-2">
    <div>
      <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">Add Service</h1>
    </div>
    <div class="mx-auto flex flex-col items-top md:flex-row pt-10">
      <div class="w-fit my-4 md:ml-10 md:my-0">
        <h2 class="text-2xl font-bold pt-2 md:w-full">Create a new service</h2>
        <p class="text-gray-500 italic">Fill the form and submit to create a new service</p>
      </div>
      <div class="md:pl-10 w-full">
        <label class="block w-full md:w-2/5">
          <span class="text-gray-700">Servie Title</span>
          <span style="color: #ff0000">*</span>
          <input
            type="text"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 hover:cursor-pointer"
            placeholder
            v-model="currentService.todo"
          />
        </label>
        <div class="w-full mt-10 flex space-x-5">
          <button
            @click="createService()"
            class="bg-green-700 text-white rounded hover:bg-green-600"
            type="submit"
          >
            Save Changes
          </button>

          <button @click="$router.back()" class="bg-red-700 text-white rounded hover:bg-red-600">
            Cancel & Go Back
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
