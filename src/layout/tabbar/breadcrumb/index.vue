<template>
    <!-- 顶部左侧静态 -->
    <el-icon style="margin-left: 10px ; margin-right:10px;" @click="changeIcon">
        <component :is="layoutSettingStore.fold?'Expand':'Fold'"></component>
    </el-icon>
    <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title">
            <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import userLayoutSettingStore from '@/store/modules/setting'
import { useRoute } from 'vue-router'

let layoutSettingStore = userLayoutSettingStore();
let $route = useRoute();

const changeIcon = ()=>{
    layoutSettingStore.fold = !layoutSettingStore.fold;
}
</script>


<script lang="ts">
export default {
    name: 'Breadcrumb'
}
</script>

<style lang="scss" scoped>
</style>