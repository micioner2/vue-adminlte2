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

export default {
    components:{
        'content-header': Header,
        'content-sidebar':Sidebar,
        'content-footer':Footer,
    },
}
</script>