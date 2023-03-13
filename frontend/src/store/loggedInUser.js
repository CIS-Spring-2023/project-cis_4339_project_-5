import { defineStore } from 'pinia'
import router from '../router';

//defining a store
export const useLoggedInUserStore = defineStore({
  // id is only required for devtools with the Pinia store
  id: 'loggedInUser',
  //central part of the store
  state: () => {
    return {
      EisLoggedIn: false, //logged in Editor
      VisLoggedIn: false, //logged in Viewer
    }
  },
  // equivalent to methods in components, perfect to define business logic
  // login and logout emthods
  actions: {

    // method to logni user
    async login(username, password) {
      try {
        const response = await apiLogin(username, password);


        // set the logged in state for viewer/editro trur or false
        this.$patch({
          EisLoggedIn: response.EisAllowed,
          VisLoggedIn: response.VisAllowed,
        })
        this.$router.push("/")

      } catch (error) {
        console.log(error)
      }
    },
    // action to logout current user
    async logout() {
      try {
        this.$patch({
          EisLoggedIn: false,
          VisLoggedIn: false,
        })
        this.$router.push("/login")

      } catch (error) {
        console.log(error)
      }


    }

  }
});

//simulate a login - we will later use our backend to handle authentication
function apiLogin(u, p) {

  if (u === "editor" && p === "editor") return Promise.resolve({ EisAllowed: true, VisAllowed: true }); //Use "admin" as username and password to simulate login as a editor

  if (u === "viewer" && p === "viewer") return Promise.resolve({ EisAllowed: false, VisAllowed: true }); //Use "viewer" as username and password to simulate login as a viewer

  return Promise.resolve({ EisAllowed: false, VisAllowed: false })
}
