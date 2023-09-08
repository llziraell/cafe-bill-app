import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '@/views/UsersView.vue'
import DishesView from '@/views/DishesView.vue'
import ResultsView from '@/views/ResultsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'users',
      component: UsersView
    },
    {
      path: '/dishes',
      name: 'dishes',
      component: DishesView
    },
    {
      path: '/results',
      name: 'results',
      component: ResultsView
    }
  ]
})

export default router
