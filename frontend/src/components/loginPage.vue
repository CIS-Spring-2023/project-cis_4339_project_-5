<template>
        <div>
        <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">
          Staff Login </h1>
        </div>
        <div class="mx-auto flex flex-col items-top md:flex-row pt-10">
      <div class="w-fit my-4 md:ml-10 md:my-0">
          
       <form @submit.prevent="store.login(username, password)" novalidate="true">
          <div class="form-group">
            <label for="username"> Username </label>
            <input type="text" id="username" v-model="username"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 hover:cursor-pointer"
            placeholder="Enter Username" required><br><br>
          </div>
          <div class="form-group">
            <label for="password"> Password </label>
            <input type="password"  id="password"  v-model="password"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 hover:cursor-pointer"
            placeholder="Enter Password" required><br><br>
        </div>
          <button 
            class="bg-red-700 text-white rounded hover:bg-red-600" 
            type ="submit" 
            >
            Login</button>
      </form>
    </div>
  </div> 
</template>

<script>
import { useLoggedInUserStore } from "@/store/loggedInUser";

export default {
  data : () => {
    return { 
            username: "",
            password: "",
        };
    }, 
   setup() {
   const store = useLoggedInUserStore()
   return {
      store,
    }  
  }
};
</script>