<template>
    <div class="tabbar">
        <div class="tabbar-left">
            <BreadCrumb/>
        </div>
        <div class="tabbar-right">
            <Setting/>
        </div>
    </div>
</template>S

<script setup lang="ts">
import BreadCrumb from "./breadcrumb/index.vue";
import Setting from "./setting/index.vue";
</script>


<script lang="ts">
export default {
    name: 'Tabbar'
}
</script>

<style scoped lang="scss">
.tabbar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .tabbar-left {
        display: flex;
        align-items: center;
    }

    .tabbar-right {
        display: flex;
        align-items: center;
    }
}
</style>