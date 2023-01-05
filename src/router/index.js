import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/auth/Login.vue'
import AuthLayout from "../components/auth/Index.vue";

import Main from '../views/Index.vue'
import Dashboard from '../components/Dashboard.vue'
import ErrorPage from '../components/ErrorPage.vue'


import Cliente from '../components/registros/Cliente.vue'
import Proveedor from '../components/registros/Proveedor.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          component: Login,
          name: 'login',
          meta: { hideForAuth: false }
        },
      ]
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Main,
      meta: {
        requiresAuth: true,
        requiresVisitor: false,
        title: 'Dashboard'
      },
      children: [

        {
          path:'/dashboard',
          component: () => Dashboard,
          meta:{
            title:'Dashboard'
          }
        },

        
      {
        path:'/:NotFound(.*)*',
        component: ()  => ErrorPage,
          meta:{
            title:'Error 404'
          }
      },


        {
          path:'/cliente',
          name:'cliente',
          component: () => Cliente,
        },

        
        {
          path:'/proveedor',
          name:'proveedor',
          component: () => Proveedor,
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
