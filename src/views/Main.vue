<template>
    <div class="wrapper">
        <content-header></content-header>
        <content-sidebar></content-sidebar>
        <div class="content-wrapper">
            <section class="content">
                <slot></slot>
            </section>
        </div>
        <content-footer></content-footer>
    </div>
</template>
<script>
import Header from "./Header.vue"
import Sidebar from "./Sidebar.vue"
import Footer from "./Footer.vue"

import {infoUser} from '../stores/userInfo';
import { mapActions } from 'pinia';


export default {
    components:{
        'content-header': Header,
        'content-sidebar':Sidebar,
        'content-footer':Footer,
    },

    methods:{
        ...mapActions(infoUser,['setUser']),
    },
   
    mounted(){
        this.$axios.post('api/userInfo').then((res)=>{
            if(res.status == 200){
                this.setUser(res.data[0]);
            }
        })
        $(document).ready(function () {
            $('.sidebar-menu').tree();
            $(document).trigger("resize");
        });
    }
}
</script>
