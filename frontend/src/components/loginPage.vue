<!-- check the if someonme is logged in if yes not rendeger the lolgin page -->
<template>
  <main v-if="!store.user.loggedIn">
    <div class="my-10">
      <h1
        class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
      >
        Staff Login
      </h1>
    </div>

    <div class="w-full max-w-lg mx-auto px-4">
      <form @submit.prevent="handleLogin" novalidate="true">
        <div class="form-group">
          <label for="username"> Username </label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 hover:cursor-pointer"
            placeholder="Enter Username"
            required
          />
          <span class="text-black" v-if="v$.username.$error">
            <p
              class="text-red-700"
              v-for="error of v$.username.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}!
            </p> </span
          ><br /><br />
        </div>
        <div class="form-group">
          <label for="password"> Password </label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 hover:cursor-pointer"
            placeholder="Enter Password"
            required
          />
          <span class="text-black" v-if="v$.password.$error">
            <p
              class="text-red-700"
              v-for="error of v$.password.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}!
            </p> </span
          ><br /><br />
        </div>
        <button
          class="bg-red-700 text-white rounded hover:bg-red-600"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  </main>
  <!-- redirect to home page if someone is already logged in -->
  <div v-else>
    {{ $router.push("/") }}
  </div>
</template>

<script>
import { useLoggedInUserStore } from "@/store/loggedInUser";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  data: () => {
    return {
      username: "",
      password: "",
    };
  },
  setup() {
    const store = useLoggedInUserStore();
    return { store, v$: useVuelidate({ $autoDirty: true }) };
  },
  methods: {
    async handleLogin() {
      const isValid = await this.v$.$validate();
      if (isValid) {
        this.store.login(this.username, this.password);
      }
      return;
    },
  },
  validations() {
    return {
      username: { required },
      password: { required },
    };
  },
};
</script>
