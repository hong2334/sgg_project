<template>
    <svg style="width: 30px; height: 30px;">
        <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
</template>

<script lang="ts" setup>
defineProps({
    prefix: {
        type: String,
        default: '#icon-',
    },
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: '',
    },
})
</script>

<style scoped></style>