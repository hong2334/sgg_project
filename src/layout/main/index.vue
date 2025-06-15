<template>
    <div>
        <router-view v-slot="{ Component }">
            <transition name="fade">
                <!-- 渲染子路由 -->
                <component :is="Component" v-if="flag"></component>
            </transition>
        </router-view>
    </div>
</template>

<script setup lang="ts">
import userLayoutSettingStore from '@/store/modules/setting'
import {watch, ref, nextTick} from "vue";
let layoutSettingStore = userLayoutSettingStore();

let flag = ref(true);
watch(() => layoutSettingStore.refresh, () => {
    flag.value = false;
    nextTick(() => {
        flag.value = true;
        layoutSettingStore.refresh = false;
    })
})
</script>

<style scoped>
.fade-enter-from {
    opacity: 0;
    transform: scale(0);
}

.fade-enter-active {
    transition: all 0.3s
}

.fade-enter-leave {
    opacity: 1;
    transform: scale(1);

}
</style>eror