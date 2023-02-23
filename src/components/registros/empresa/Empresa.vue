<template>
    <div class="row">
        <div class="col-md-12">
            <div class="box box-primary">
                <div class="box box-header with-border">
                    <div class="box-header with-border">
                        <h3 class="box-title"><i class="fa fa-align-justify"></i>&nbsp;&nbsp;Empresa</h3>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button class="btn btn-primary" @click="abrirModal('R')" v-if="!    arrayLista.length"><i class="fa fa-plus"></i>&nbsp;&nbsp;Nuevo</button>
                    </div>
                </div>
                <div class="box-body">
                    <div class="table table-responsive">
                        <table class="table table-bordes table-hover" style="white-space:nowrap;" >
                            <thead>
                                <tr>
                                    <th>RAZON SOCIAL</th>
                                    <th>RUC</th>
                                    <th>TELÉFONO / CELULAR</th>
                                    <th>DIRECCIÓN</th>
                                    <th>EDITAR</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="array in arrayLista" :key="array.id">
                                    <td v-text="array.razon_social"></td>
                                    <td v-text="array.ruc"></td>
                                    <td v-text="array.telefono"></td>
                                    <td v-text="array.direccion"></td>
                                    <td><button class="btn btn-success btn-xs" @click="abrirModal('E',array)"><i class="fa fa-edit"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


        <div class="modal  fade" id="modal-empresa">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-primary">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title text-center" v-text="tituloModal"></h4>
                    </div>

                    <div class="modal-body">
                        <form class="form" enctype="multipart/form-data" autocomplete="off">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-university"></i>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Razón Social" v-model="empresa.razon_social" id="razon_social">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-credit-card"></i>
                                            </div>
                                            <input type="text" class="form-control" placeholder="R.U.C" v-model="empresa.ruc" id="ruc">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-phone"></i>
                                            </div>
                                            <input type="text" class="form-control" placeholder="000-000" v-model="empresa.telefono">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-map-marker"></i>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Av,Urb,AA.HH" v-model="empresa.direccion" id="direccion">
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-text"></i>
                                            </div>
                                            <input type="text" class="form-control" v-model="empresa.titulo">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                      <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-addon">
                                                <i class="fa fa-signature"></i>
                                            </div>
                                            <input type="text" class="form-control" v-model="empresa.siglas_titulo">
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-8">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-camera"></i></span>
                                            <input type="file" class="form-control" ref="file" @change="onUploadImagen($event)" id="file">
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="form-group">
                                        <img :src="img" width="150" height="150">
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default pull-left" data-dismiss="modal"> <i class="fa fa-times"></i>&nbsp; Cerrar</button>
                        <button type="button" class="btn btn-primary" @click="regEmpresa()" v-if="opcion"><i class="fa fa-save"></i>&nbsp; Registrar</button>
                        <button type="button" class="btn btn-success" @click="editEmpresa()" v-else> <i class="fa fa-edit"></i>&nbsp; Editar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            arrayLista:[],
            empresa:{
                razon_social:'',
                ruc:'',
                direccion:'',
                telefono:'',
                titulo:'',
                siglas_titulo:'',
                ruta:'',
            },
            tituloModal:'',
            opcion:0,
            img: '/src/assets/img/empresa/default/company.png',
            imagenActual: null,
        }
    },

    methods:{

        listar(){
            let me = this;
            const url = '/empresa';
            axios.get(url).then((res) => {
                me.arrayLista = res.data.empresa;
            })
        },

        abrirModal(opcion,data){
            let me = this;
            if (opcion == 'R') {
                me.tituloModal = 'REGISTRAR EMPRESA';
                me.opcion = 1;
                me.empresa  = {}
            }else{
                me.tituloModal = 'EDITAR EMPRESA';
                let ruta = data.ruta != null ? data.ruta : 'src/assets/img/empresa/default/company.png';
                me.empresa = {
                    id: data.id,
                    razon_social: data.razon_social,
                    ruc: data.ruc,
                    direccion: data.direccion,
                    telefono: data.telefono,
                    titulo: data.titulo,
                    siglas_titulo: data.siglas_titulo,
                    ruta:ruta
                }
                me.img = ruta;
                me.imagenActual = ruta;
                me.opcion = 0;

            }
            $('#modal-empresa').modal({backdrop: 'static', keyboard: false}) 
        },

        regEmpresa(){
            let me = this;
            if (me.empresa.razon_social == ""  || me.empresa.razon_social == undefined) {
                $.jGrowl('<h3 class="profile-username text-center">Aviso! <br>Ingrese la razón social</h3>', {theme:'warning',position:'bottom-right',life:1000});
                $('#razon_social').focus();
            }else if (me.empresa.ruc == ""  || me.empresa.ruc == undefined) {
                $.jGrowl('<h3 class="profile-username text-center">Aviso! <br>Ingrese el RUC</h3>', {theme:'warning',position:'bottom-right',life:1000});
                $('#ruc').focus();
            }else if (me.empresa.direccion == ""  || me.empresa.direccion == undefined) {
                $.jGrowl('<h3 class="profile-username text-center">Aviso! <br>Ingrese la dirección</h3>', {theme:'warning',position:'bottom-right',life:1000});
                $('#direccion').focus();

            }else{

                let data = me.empresa;
                const formData = new FormData();
                 formData.append('razon_social', data.razon_social);
                 formData.append('ruc', data.ruc);
                 formData.append('direccion', data.direccion);
                 formData.append('telefono', data.telefono);
                 formData.append('titulo', data.titulo);
                 formData.append('siglas_titulo', data.siglas_titulo);
                 formData.append('ruta', data.ruta);


                const url = '/empresa';
                axios.post(url,formData).then((res) =>{
                    if(res.status = 200){
                        me.listar();
                        $.jGrowl('<h3class="profile-username text-center">Éxito! <br>Empresa registrada</h3>', {theme:'success',position:'bottom-right',life:1000});
                        $('#modal-empresa').modal('hide');
                    }
                }).catch((err) => {console.log(err)})


            }
        },

        editEmpresa(){
            // validate extension a file upload

            let me = this;
            if (me.empresa.razon_social == ""  || me.empresa.razon_social == undefined) {
                $.jGrowl('<h3 class="profile-username text-center">Aviso! <br>Ingrese la razón social</h3>', {theme:'danger',position:'bottom-right',life:1000});
                $('#razon_social').focus();
            }else if (me.empresa.ruc == ""  || me.empresa.ruc == undefined) {
                $.jGrowl('<h3 class="profile-username text-center">Aviso! <br>Ingrese el RUC</h3>', {theme:'danger',position:'bottom-right',life:1000});
                $('#ruc').focus();
            }else if (me.empresa.direccion == ""  || me.empresa.direccion == undefined) {
                $.jGrowl('<h3 class="profile-username text-center">Aviso! <br>Ingrese la dirección</h3>', {theme:'danger',position:'bottom-right',life:1000});
                $('#direccion').focus();

            }else{
                let data = me.empresa;
                const formData = new FormData();
                 formData.append('id', data.id);
                 formData.append('razon_social', data.razon_social);
                 formData.append('ruc', data.ruc);
                 formData.append('direccion', data.direccion);
                 formData.append('telefono', data.telefono);
                 formData.append('titulo', data.titulo);
                 formData.append('siglas_titulo', data.siglas_titulo);
                 formData.append('ruta', data.ruta);
                 formData.append('imagenActual', me.imagenActual);

                const url = '/empresa/editar';
                axios.post(url,formData).then((res) =>{
                    me.listar();
                    $.jGrowl('<h3class="profile-username text-center">Éxito! <br>Empresa Editada</h3>', {theme:'success',position:'bottom-right',life:1000});
                    $('#modal-empresa').modal('hide');
                }).catch((err) => {console.log(err)})

            }
        },

        onUploadImagen(e) {
            var fileName = this.$refs.file.files[0].name;
            var fileExtension = fileName.split('.').pop();

            if(fileExtension == 'png' || fileExtension == 'jpg' || fileExtension == 'jpeg' ){
                this.empresa.ruta = this.$refs.file.files[0];
                let fileReader = new FileReader();
                fileReader.readAsDataURL(e.target.files[0]);

                fileReader.onload = (e) => {
                    this.img = e.target.result
                }
            }else{
                $.jGrowl('<h3 class="profile-username text-center">Aviso! <br>Solo se permite imágenes</h3>', {theme:'danger',position:'bottom-right',life:3000});
                this.img = this.imagenActual;
                this.empresa.ruta = '';
                $('#file').val('');
            }
        },
    },

    mounted(){
        // this.listar();
    }

}
</script>
