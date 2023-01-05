<template>

    <aside class="main-sidebar">

        <section class="sidebar">

            <div class="user-panel">
                <div class="pull-left image">
                    <img src="../assets/admin-lte/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
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
                <RouterLink :to="{name:'cliente'}">
                    <i class="fa fa-utensils"></i><span>Cliente</span>
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