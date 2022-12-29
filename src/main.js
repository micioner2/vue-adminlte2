import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'



import "../src/assets/admin-lte/bower_components/jquery/dist/jquery.min.js"
import "../src/assets/admin-lte/bower_components/bootstrap/dist/js/bootstrap.min.js"
import "../src/assets/admin-lte/bower_components/select2/dist/js/select2.full.min.js"
import "../src/assets/admin-lte/bower_components/bootstrap/dist/js/bootstrap.min.js"
import "../src/assets/admin-lte/bower_components/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js/"
import "../src/assets/admin-lte/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"
import "../src/assets/admin-lte/dist/js/adminlte.min.js"


import "../src/assets/admin-lte/bower_components/font-awesome/css/all.css"
import "../src/assets/admin-lte/bower_components/Ionicons/css/ionicons.min.css"
import "../src/assets/admin-lte/bower_components/bootstrap/dist/css/bootstrap.min.css"
import "../src/assets/admin-lte/dist/css/AdminLTE.min.css"
import "../src/assets/admin-lte/dist/css/skins/_all-skins.min.css"



const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.use(createPinia())
app.use(router)

app.mount('#app')
