<template>
    <div class="logo">
        <img :src=setting.logo alt=""/>
        <p v-show="!layoutSettingStore.fold">{{ setting.title }}</p>
    </div>
</template>

<script setup lang="ts">
import setting from '../../setting';
import userLayoutSettingStore from '@/store/modules/setting';

let layoutSettingStore = userLayoutSettingStore();
</script>

<script lang="ts">
export default {
    name: 'Logo'
}
</script>

<style scoped lang="scss">
.logo {
    width: 100%;
    height: $base-menu-logo-height;
    color: white;
    display: flex;
    align-items: center;
    padding: 10px;
    img{
        width: 40px;
        height: 40px;
    }
    p{
        font-size: $base-logo-title-fontSize;
        margin-left: 5px;
    }
}
</style>
