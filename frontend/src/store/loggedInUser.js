import { defineStore } from 'pinia'

//defining a store
export const useLoggedInUserStore = defineStore({
  // id is only required for devtools with the Pinia store
  id: 'loggedInUser',
  //central part of the store
  state: () => {
    return {
      EisLoggedIn: false, //logged in Editor
      VisLoggedIn:false, //logged in Viewer
    }
  },
  // equivalent to methods in components, perfect to define business logic
  actions: {
    async login(username, password) {
      try {
        const response = await apiLogin(username, password);
        this.$patch({
          EisLoggedIn: response.EisAllowed,
          VisLoggedIn:response.VisAllowed,
        })
        this.$router.push("/");
      } catch(error) {
        console.log(error)
      }
    }

  }
});

//simulate a login - we will later use our backend to handle authentication
function apiLogin(u, p) {
  
  if (u === "ev" && p === "ev") return Promise.resolve({ EisAllowed: true}); //Use "ev" as username and password to simulate login as a editor
  if (p === "ev") return Promise.resolve({ EisAllowed: false });

  if (u === "vv" && p === "vv") return Promise.resolve({ VisAllowed: true}); //Use "vv" as username and password to simulate login as a viewer
  if (p === "vv") return Promise.resolve({ VisAllowed: false });

}
