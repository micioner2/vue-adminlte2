<template>
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">CLIENTE</h3>
            <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                    title="Collapse">
                    <i class="fa fa-minus"></i></button>
                <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip"
                    title="Remove">
                    <i class="fa fa-times"></i></button>
            </div>
        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-md-6">
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Apellidos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in arrayDate" :key="index">
                                <td>{{ item.date }}</td>
                                <td>{{ item.time }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="box-footer">
            <div class="form-group">
                <button class="btn btn-primary" @click="alerta()"><i class="fa fa-save"></i>&nbsp;Registrar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            arrayDate:[]
        }
    },

    methods:{
        alerta(){
            this.arrayDate = [];
            this.$axios.get('http://time.jsontest.com').then((res)=>{
                    this.arrayDate.push(res.data);
            })
        }
    }
} 
</script>