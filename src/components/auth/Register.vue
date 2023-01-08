<template>
    <div class="register-box">
        <div class="register-logo">
            <a href="#"><b>Admin</b>LTE</a>
        </div>
        <div class="register-box-body">
            <p class="login-box-msg">Registar nuevo usuario</p>
            <form @submit.prevent="handleSubmit">
                <div class="form-group has-feedback">
                    <input type="text" class="form-control" placeholder="Nombre"  v-model="user.name">
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="email" class="form-control" placeholder="Email" v-model="user.email">
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control" placeholder="Password" v-model="user.password">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control" placeholder="Retype password" v-model="user.pass">
                    <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-4">
                        <button type="submit" class="btn btn-primary btn-block btn-flat">Registrar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { reactive } from "vue";

    const user = reactive({name:'',email:'',password:'',pass:''})
    const handleSubmit = (e) => {
        e.preventDefault();
        
            if(user.name == '') return  alert("El nombre es obligatorio");
            if(user.email == '') return  alert("El email es obligatorio");
            if(user.password == '') return  alert("El password es obligatorio");
            if(user.password != user.pass) return alert("La contraseñas no coinciden");
            axios.post('/api/register',user).then((res)=>{
                if(res.status == 200) return alert("Registro exitoso");
            })

    }
</script>

<style scoped>
    .register-box{
        margin-top: 0px !important;
    }
</style>