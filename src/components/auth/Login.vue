<template>
    <div class="login-box">
        <div class="login-logo">
            <a href="#"><b>Ingreso al sistema</b></a>
        </div>
        <div class="login-box-body">
            <p class="login-box-msg">Inicia Sesión</p>
            <div class="form-group has-feedback">
                <input type="email" class="form-control" placeholder="Email" v-model="email" />
                <span
                class="glyphicon glyphicon-envelope form-control-feedback"
                ></span>
            </div>
            <div class="form-group has-feedback">
                <input type="password" class="form-control" placeholder="Password" v-model="password" />
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div class="row">
                <div class="col-xs-4">
                    <button type="button" class="btn btn-primary btn-block btn-flat" @click="handleSubmit">Ingresar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data(){
        return {
            email:'miriam@gmail.com',
            password:'12345678',
            csrf_token:''
        }
    },
    methods:{
        handleSubmit(e) {
            e.preventDefault()
            if(this.password.length > 0) {
                this.$axios.get('/sanctum/csrf-cookie').then((res) => {
                    this.$axios.post('api/login', {
                        email: this.email,
                        password: this.password
                    })
                    .then((response) => {
                       if(response.status == 200){
                            localStorage.setItem('tokenBearer', response.data.access_token);
                            this.$router.go('/dashboard');
                       }
                    })
                    .catch(function (error) {
                        if(error.response){
                            if(error.response.status == 401){
                                alert("Usuario no encontrado");
                            }
                        }
                    });
                })
            }
        },

    },

    beforeRouteEnter(to, from, next) {
        if (localStorage.getItem('tokenBearer') && to.path === '/login') {
            next({ path: '/dashboard' });
        }else{
            next();
        }
    }

}
</script>


