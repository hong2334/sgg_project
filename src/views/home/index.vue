<template>
   <div class="common-layout">
    首页
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import useUserStore from '../../store/modules/user';

const userStore = useUserStore();
onMounted(()=>{
  userStore.userInfo();
})
</script>
<style scoped>
.common-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  .aside {
    background-color: #f5f5f5;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .header {
    background-color: #f5f5f5;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .main {
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}
</style>