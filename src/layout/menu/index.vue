<template>
    <div>
       <template v-for="(item, index) in menuList" :key="item.path">
            <!-- 没有子路由 -->
             <template v-if="!item.children">
            <el-menu-item v-if="!item.meta.hidden" :index="item.path">
                <template #title>
                    <span>{{ item.meta.title }}</span>
                </template>
            </el-menu-item>
            </template>
            <!-- 有子路由且个数大于一个 -->
            <el-menu-item v-if="item.children&&item.children.length == 1" :index="item.children[0].path">
                <template #title>
                    <span>{{ item.children[0].meta.title }}</span>
                </template>
            </el-menu-item>
            <!-- 有子路由且个数大于1个 -->
             <el-sub-menu :index="item.path" v-if="item.children&&item.children.length > 1">
                <template #title>
                    <span>{{ item.meta.title }}</span>
                </template>
                <Menu :menuList="item.children"></Menu>
             </el-sub-menu>
       </template>
    </div>
</template>

<script setup lang="ts">
// 获取父组件传递过来的全部路由数据
defineProps(['menuList'])
</script>

<script lang="ts">
export default {
    name: 'Menu'
}
</script>

<style lang="scss" scoped>
</style>