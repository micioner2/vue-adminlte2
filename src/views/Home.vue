<template>
    <div class="wrapper">
        <content-header></content-header>
        <content-sidebar></content-sidebar>
        <content-content></content-content>
        <content-footer></content-footer>
        <!-- <pre-loader></pre-loader> -->
    </div>
</template>
<script>
import Header from "./Header.vue"
import Sidebar from "./Sidebar.vue"
import Content from "./Content.vue"
import Footer from "./Footer.vue"

export default {
    components:{
        'content-header': Header,
        'content-sidebar':Sidebar,
        'content-content':Content,
        'content-footer':Footer,
    }
}
</script>