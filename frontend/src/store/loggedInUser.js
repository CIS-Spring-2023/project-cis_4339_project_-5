import { defineStore } from "pinia";
import router from "../router";
const apiURL = import.meta.env.VITE_ROOT_API;
import axios from "axios";

//defining a store
export const useLoggedInUserStore = defineStore({
  // id is only required for devtools with the Pinia store
  id: "loggedInUser",
  //central part of the store
  state: () => {
    return {

      EisLoggedIn: false, //logged in Editor
      VisLoggedIn: false, //logged in Viewer
    };
  },
  // equivalent to methods in components, perfect to define business logic
  // login and logout emthods
  actions: {
    // method to logni user
    async login(username, password) {
      try {

        const res = await axios.post(`${apiURL}/auth/login`, { username: username, password: password })

        if (res.data.role == 'editor') {
          this.EisLoggedIn = true
          this.VisLoggedIn = true
        }
        else if (res.data.role == 'viewer') {
          this.EisAllowed = false
          this.VisLoggedIn = true
        }

      } catch (error) {
        console.log(error);
      }
    },
    // action to logout current user
    async logout() {
      try {
        this.$patch({
          EisLoggedIn: false,
          VisLoggedIn: false,
        });
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
  },
});

//simulate a login - we will later use our backend to handle authentication
function apiLogin(u, p) {

  axios
    .post(`${apiURL}/auth/login`, { username: u, password: p })
    .then((res) => {
      if (res.data.role == "editor") {
        alert("EDt")
        return { EisAllowed: true, VisAllowed: true }

      } else if ((res.data.role = "viewer")) {
        alert("v")
        return { EisAllowed: false, VisAllowed: true }
      }
    })
    .catch((e) => {
      console.log("Soemthiong went wrong");
    })


}
