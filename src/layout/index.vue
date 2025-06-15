<template>
    <div class="layout_container">
        <div class="layout_slider" :class="{ fold: layoutSettingStore.fold ? true : false }">
            <Logo />
            <!-- 菜单滚动区 -->
            <el-scrollbar class="scrollbar">
                <el-menu 
                :collapse="layoutSettingStore.fold" 
                background-color="#001529" 
                text-color="white" 
                collapse-transition	
                :default-active="$route.path">
                    <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <div class="layout_tabber" :class="{ fold: layoutSettingStore.fold ? true : false }">
            <Tabbar></Tabbar>
        </div>
        <div class="layout_main" :class="{ fold: layoutSettingStore.fold ? true : false }">
            <Main></Main>
        </div>
    </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import useUserStore from '../store/modules/user';
import Main from './main/index.vue';
import { useRoute } from 'vue-router';
import Tabbar from './tabbar/index.vue';
import userLayoutSettingStore from '@/store/modules/setting';

let userStore = useUserStore();
let $route = useRoute()

let layoutSettingStore = userLayoutSettingStore();
</script>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;

    .layout_slider {
        width: $base-menu-width;
        height: 100%;
        background-color: #001529;
        position: fixed;
        transition: all 0.3s;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-tabber-height );

            .el-menu {
                border-right: none;
            }
        }

        &.fold {
            width: $base-menu-min-width;
        }
    }

    .layout_tabber {
        width: calc(100% - $base-menu-width);
        height: $base-tabber-height;
        position: fixed;
        top: 0px;
        left: $base-menu-width;
        transition: all 0.3s;

        &.fold {
            width: calc(100% - $base-menu-min-width);

            left: $base-menu-min-width;
        }
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
        transition: all 0.3s;

        &.fold {
            width: calc(100% - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }
}
</style>