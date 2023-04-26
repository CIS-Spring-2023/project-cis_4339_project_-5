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
      user: {
        loggedIn: false,
        role: null
      },
      error: null
    };
  },

  // login and logout emthods
  actions: {
    // method to logni user
    async login(username, password) {
      this.error = null;
      try {

        const res = await axios.post(`${apiURL}/auth/login`, { username: username, password: password })
        console.log(res.status)
        if (res.data.role == 'editor') {
          this.user.loggedIn = true;
          this.user.role = "editor";
        }
        else if (res.data.role == 'viewer') {
          this.user.loggedIn = true;
          this.user.role = "viewer";
        }

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
    },
    // action to logout current user
    async logout() {
      try {
        this.user.loggedIn = false;
        this.user.role = null;
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
