<template>
    <div>
        <router-view v-slot="{ Component }">
            <transition name="fade">
                <!-- 渲染子路由 -->
                <component :is="Component"></component>
            </transition>
        </router-view>
    </div>
</template>

<script setup lang="ts">
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