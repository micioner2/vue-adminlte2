<template>
    <header class="main-header">
        <a href="#" class="logo">
            <span class="logo-mini"><b>A</b>LT</span>
            <span class="logo-lg"><b>Admin</b>LTE</span>
        </a>
        <nav class="navbar navbar-static-top">
            <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <li class="dropdown user user-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <img src="../../node_modules/admin-lte/dist/img/user2-160x160.jpg" class="user-image" alt="User Image" />
                            <span class="hidden-xs"> {{userInfo.name}}</span>
                        </a>
                        <ul class="dropdown-menu">
                            <li class="user-header">
                                <img src="../../node_modules/admin-lte/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image" />
                                <p>
                                {{userInfo.name}}
                                    <small>Member since Nov. {{userInfo.usuario_creado}}</small>
                                </p>
                            </li>

                            <li class="user-body">
                                <div class="row">
                                <div class="col-xs-4 text-center">
                                    <a href="#">Followers</a>
                                </div>
                                <div class="col-xs-4 text-center">
                                    <a href="#">Sales</a>
                                </div>
                                <div class="col-xs-4 text-center">
                                    <a href="#">Friends</a>
                                </div>
                                </div>
                            </li>
                            <li class="user-footer">
                                <div class="pull-left">
                                <a href="#" class="btn btn-default btn-flat">Profile</a>
                                </div>
                                <div class="pull-right">
                                <a href="#" class="btn btn-default btn-flat" @click="cerrarSesion">Sign out</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import {infoUser} from '../stores/userInfo';
import { mapState } from 'pinia';
export default {

    computed:{
        ...mapState(infoUser,['userInfo'])
    },  
    
  methods: {
    cerrarSesion() {
        this.$axios.post("api/logout").then((res) => {
            if (res.status == 204) {
                localStorage.removeItem("tokenBearer");
                this.$router.replace({ path: 'login' });
            }
        });
    }
  }
};
</script>