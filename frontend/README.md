# Data Platform Frontend

This project uses [VueJS 3](https://vuejs.org/) with [Vite](https://vitejs.dev/) and [TailwindCSS](https://tailwindcss.com/).
For form validation [Vuelidate](https://vuelidate-next.netlify.app/) is used.

## Project setup

    npm install

### Fake Data Used
NOTE: Currently we are using some fake data (clients, services, and events) for the app.
The data is stored in file `mock_data.js` in '/src/fake_data.js'
The data has a list of clients, list of services, and list of events, and also a function that calculates the clients in each zip code and exports an array.

This data has been used across the app to similate real data coming from an api.


### Compiles and hot-reloads for development

    npm run dev
