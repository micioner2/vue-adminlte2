<template>

    <aside class="main-sidebar">

        <section class="sidebar">

            <div class="user-panel">
                <div class="pull-left image">
                    <img src="../../node_modules/admin-lte/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p>Alexander Pierce</p>
                    <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                </div>
            </div>

            <form action="#" method="get" class="sidebar-form">
                <div class="input-group">
                    <input type="text" name="q" class="form-control" placeholder="Search...">
                    <span class="input-group-btn">
                        <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i
                                class="fa fa-search"></i>
                        </button>
                    </span>
                </div>
            </form>

            <ul class="sidebar-menu" data-widget="tree">

                <li>
                    <a href="#"><i class="fa fa-home"></i><span>Inicio</span></a>
                </li>

                
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-clipboard"></i> <span>Registro</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li >
                            <RouterLink :to="{name:'empresa'}">
                                <i class="fa fa-circle text-aqua"></i>Empresa
                            </RouterLink>
                        </li>
                        <li><a href="#"><i class="fa fa-circle text-green"></i>Usuarios</a></li>
                        <li><a href="#"><i class="fa fa-circle text-green"></i>Parámetros</a></li>
                        <li><a href="#"><i class="fa fa-circle text-blue"></i>Proveedores</a></li>
                        <li><a href="#"><i class="fa fa-circle text-blue"></i>Clientes</a></li>
                        <li><a href="#"><i class="fa fa-circle text-red"></i>Mesas</a></li>
                    </ul>
                </li>

                <li>
                    <RouterLink :to="{name:'usuario'}">
                        <i class="fa fa-user"></i><span>Usuario</span>
                        <span class="pull-right-container">
                            <small class="label pull-right bg-green">$</small>
                        </span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink :to="{name:'proveedor'}">
                        <i class="fa fa-list"></i> <span>Proveedor</span>
                    </RouterLink>
                </li>
          </ul>
        </section>

    </aside>
</template>
<script>
import { RouterLink } from 'vue-router'

</script>