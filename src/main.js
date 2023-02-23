import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import "@/assets/admin-lte/bower_components/jquery/dist/jquery.min.js"
import "@/assets/admin-lte/bower_components/bootstrap/dist/js/bootstrap.min.js"
import "@/assets/admin-lte/bower_components/select2/dist/js/select2.full.min.js"
import "@/assets/admin-lte/bower_components/bootstrap/dist/js/bootstrap.min.js"
import "@/assets/admin-lte/bower_components/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js/"
import "@/assets/admin-lte/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"
import "@/assets/admin-lte/dist/js/adminlte.min.js"
import "@/assets/admin-lte/alerta/jgrowl.min.js"



import "@/assets/admin-lte/bower_components/font-awesome/css/all.css"
import "@/assets/admin-lte/bower_components/Ionicons/css/ionicons.min.css"
import "@/assets/admin-lte/bower_components/bootstrap/dist/css/bootstrap.min.css"
import "@/assets/admin-lte/dist/css/AdminLTE.min.css"
import "@/assets/admin-lte/dist/css/skins/_all-skins.min.css"

import "@/assets/admin-lte/alerta/jgrowl.min.css"



const app = createApp(App)
axios.defaults.baseURL ='http://127.0.0.1:8000/'
// axios.defaults.baseURL ='https://apivue.softwarezp.com/'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('tokenBearer')}`;
app.config.globalProperties.$axios = axios;
app.use(createPinia())
app.use(router)

app.mount('#app')
