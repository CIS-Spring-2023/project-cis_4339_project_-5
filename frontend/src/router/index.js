import { createRouter, createWebHistory } from 'vue-router'

// make all paths and names lowercase for consistency
const routes = [
  {
    path: '/',
    props: true,
    component: () => import('../components/homePage.vue')
  },
  {
    path: '/login',
    name: 'loginpage',
    component: () => import('../components/loginPage.vue')
  },
  {
    path: '/services',
    name: 'allservices',
    component: () => import('../components/allServices.vue')
  },
  {
    path: '/createservice',
    name: 'createservice',
    props: true,
    component: () => import('../components/createService.vue')
  },
  {
    path: '/editeservice/:id',
    name: 'editservice',
    props: true,
    component: () => import('../components/editService.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboardpage',
    component: () => import('../components/dashboardPage.vue')
  },
  {
    path: '/intakeform',
    name: 'intakeform',
    props: true,
    component: () => import('../components/intakeForm.vue')
  },
  {
    path: '/findclient',
    name: 'findclient',
    component: () => import('../components/findClient.vue')
  },
  {
    path: '/updateclient/:id',
    name: 'updateclient',
    props: true,
    component: () => import('../components/updateClient.vue')
  },
  {
    path: '/eventform',
    name: 'eventform',
    component: () => import('../components/eventForm.vue')
  },
  {
    path: '/findevents',
    name: 'findevents',
    component: () => import('../components/findEvents.vue')
  },
  {
    path: '/eventdetails/:id',
    name: 'eventdetails',
    props: true,
    component: () => import('../components/eventDetails.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
