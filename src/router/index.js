import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Bienvenido from '../components/Bienvenido.vue'
import Cliente from '../components/registros/Cliente.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path:'/main',
          name:'main',
          component: () => Bienvenido,
        },

        {
          path:'/cliente',
          name:'cliente',
          component: () => Cliente,
        },
      ]
    },

   

    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
