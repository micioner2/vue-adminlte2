<template>
    <div class="login-box">
        <div class="login-logo">
            <a href="#"><b>Ingreso al sistema</b></a>
        </div>
        <div class="login-box-body">
            <p class="login-box-msg">Inicia Sesión</p>
            <form @submit.prevent="handleSubmit">
                <div class="form-group has-feedback">
                    <input type="email" class="form-control" placeholder="Email" v-model="email" />
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control" placeholder="Password" v-model="password" />
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-4">
                        <button type="submit" class="btn btn-primary btn-block btn-flat">Ingresar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            email:'miriam@gmail.com',
            password:'12345678',
        }
    },
    methods:{
        handleSubmit(e) {
            e.preventDefault()

            if(this.password.length > 0) {
                // comprueba si ya existe un token en una misma pc si en caso hubiesen 2 páginas con la misma ruta login
                if(localStorage.getItem('tokenBearer')) {
                    return this.$router.go();
                }

                this.$axios.get('/sanctum/csrf-cookie').then((res) => {
                    this.$axios.post('api/login', {
                        email: this.email,
                        password: this.password
                    }).then((res)=>{
                       if(res.status == 200){
                            localStorage.setItem('tokenBearer', res.data.access_token);
                            this.$router.go('/dashboard');
                       }
                    }).catch((error)=>{
                        alert(error.response.data.msg);
                    })
                })
            }
            // console.log(window.location.origin);

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


