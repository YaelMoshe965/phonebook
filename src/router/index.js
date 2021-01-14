import Vue from 'vue'
import VueRouter from 'vue-router'
import phonebookPage from '@/views/phonebookPage.vue';
import phonebookItemDetails from '@/views/phonebookItemDetails.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'phonebook-page',
    component: phonebookPage
  },
  {
    path: '/phonebookItem/:id',
    name: 'phonebook-item-details',
    component: phonebookItemDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
