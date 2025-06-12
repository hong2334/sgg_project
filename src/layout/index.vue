<template>
    <div class="layout_container">
        <div class="layout_slider">
            <Logo/>
            <!-- 菜单滚动区 -->
            <el-scrollbar class="scrollbar">
                <el-menu background-color="#001529" text-color="white">
                    <Menu :menuList = "userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <div class="layout_tabber"></div>
        <div class="layout_main">
            <p style="height: 10000px;">主内容区</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import useUserStore from '../store/modules/user';
let userStore = useUserStore();
</script>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;
    background-color: #114491;
    .layout_slider {
        width: $base-menu-width;
        height: 100%;
        background-color: #001529;
        position: fixed;
        .scrollbar{
            width: 100%;
            height: calc(100vh - $base-tabber-height );
            .el-menu{
                border-right: none;
            }
        }
    }
    .layout_tabber {
        width: calc(100% - $base-menu-width);
        height: $base-tabber-height;
        background-color: #272121;
        position: fixed;
        top: 0px;
        left: $base-menu-width;
    }
    .layout_main {
        position: relative;
        width: calc(100% - $base-menu-width);
        height: calc(100% - $base-tabber-height);
        background-color: rgb(205, 122, 122);
        left: $base-menu-width;
        top: $base-tabber-height;
        padding: 20px;
        overflow: auto;
    }
}
</style>