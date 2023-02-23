import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from "../components/auth/Index.vue";
import Main from '../views/Index.vue'


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
          component: () => import('../components/auth/Login.vue'),
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
          component: () => import('../components/Dashboard.vue'),
          meta:{
            title:'Dashboard'
          }
        },

        
      {
        path:'/:NotFound(.*)*',
        component: ()  => import('../components/ErrorPage.vue'),
          meta:{
            title:'Error 404'
          }
      },


        {
          path:'/usuario',
          name:'usuario',
          component: () =>  import('../components/auth/Register.vue'),
        },

        
        {
          path:'/proveedor',
          name:'proveedor',
          component: () => import('../components/registros/Proveedor.vue'),
        },

        // REGISTROS

        {
          path:'/empresa',
          name:'empresa',
          component: () => import('../components/registros/empresa/Empresa.vue'),
        },


      ]
    },

  ]

})


router.beforeEach((to, from) => {
  const isHide = to.matched.some((record) => record.meta.hideForAuth);
  if (isHide) {
    return { name: 'login' }
  }
})

export default router
