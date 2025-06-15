<template>
    <el-button size="small" icon="Refresh" circle="true" @click="refresh"></el-button>
    <el-button size="small" icon="FullScreen" circle="true" @click="fullScreen"></el-button>
    <el-button size="small" icon="Setting" circle="true"></el-button>
    <img src="../../../../public/logo.png" style="width:24px; height: 24px;margin: 0px 10px;">

    <!-- 下拉菜单 -->
    <el-dropdown :hide-on-click="false">
        <span class="el-dropdown-link">
            admin
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import userLayoutSettingStore from '@/store/modules/setting'

let layoutSettingStore = userLayoutSettingStore();

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
