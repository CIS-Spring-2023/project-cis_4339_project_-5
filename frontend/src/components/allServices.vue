<script>
import axios from 'axios';
const apiURL = import.meta.env.VITE_ROOT_API;
export default {
  data() {
    return {
      servicesList: [],
      newService: {
        name:'',
        status: ''
      },
    };
  },
  created() {
    this.getServices();
  },
  methods: {
    getServices() {
      axios.get(`${apiURL}/todos?limit=8`).then((res) => {
        this.servicesList = res.data.todos;
      });
    },
  },
};
</script>

<template>
  <main>
    <div>
      <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">Services</h1>
    </div>

    <div class="mx-auto flex flex-col items-top md:flex-row pt-10">
      <div class="w-fit px-2 my-4 md:ml-10 md:my-0">
        <h2 class="text-2xl font-bold pt-2 md:w-full">List of Services</h2>
        <p class="text-gray-500">Click on an action to edit or disable a service</p>
      </div>
      <div class="w-full px-2 mx-auto flex flex-col md:w-full md:px-0">
        <table class="min-w-full shadow-md rounded">
          <thead class="bg-gray-50 text-xl">
            <tr>
              <th class="py-4 px-2 w-2/4 text-left">Service Name</th>
              <th class="py-4 w-1/4 text-left">Status</th>
              <th class="py-4 w-1/4 text-left">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-250">
            <tr v-for="service in servicesList" :key="service.id">
              <td class="p-2 w-2/4 text-left text-gray-600">{{ service.todo }}</td>
              <td class="p-2 w-1/4 text-left text-gray-600">
                {{ service.status ? service.status : 'Active' }}
              </td>
              <td class="p-2 w-1/4 text-left">
                <span class="text-gray-500 hover:cursor-pointer hover:text-black mr-4">Edit</span>
                <span class="text-gray-500 hover:cursor-pointer hover:text-black mr-4"
                  >Disable</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
