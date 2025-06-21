<template>
    <el-button size="small" icon="Refresh" circle="true" @click="refresh"></el-button>
    <el-button size="small" icon="FullScreen" circle="true" @click="fullScreen"></el-button>
    <el-button size="small" icon="Setting" circle="true"></el-button>
    <img :src="userStore.avatar" style="width:24px; height: 24px;margin: 0px 10px;">

    <!-- 下拉菜单 -->
    <el-dropdown :hide-on-click="false">
        <span class="el-dropdown-link">
            {{ userStore.username }}
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import userLayoutSettingStore from '@/store/modules/setting'
import useUserStore from '@/store/modules/user';
import { useRouter, useRoute } from 'vue-router';

const userStore = useUserStore();

let layoutSettingStore = userLayoutSettingStore();
let $router = useRouter()
let $route = useRoute()
const logout = async ()=>{
    // 向后端发出退出请求
    // 清楚用户相关的数据
    await userStore.userLogout();
    // 跳转到登录页面
    $router.push({path:'/login',query:{redirect:$route.path}});
}


const refresh = ()=>{
    layoutSettingStore.refresh = true;
}

const fullScreen = ()=>{
    let isFull = document.fullscreenElement;
    if (!isFull) {
        document.documentElement.requestFullscreen();
    } else {
         document.exitFullscreen();
    }
}
</script>

<script lang="ts">
export default {
    name: 'Setting'
}
</script>
