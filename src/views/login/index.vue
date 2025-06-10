<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginFormRef">
                    <h1>Hello</h1>
                    <h2>欢迎来到硅谷甄选</h2>
                    <el-form-item prop="username">
                        <el-input v-model="loginForm.username" placeholder="请输入用户名" :prefix-icon="User"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" :prefix-icon="Lock" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" class="login_btn" type="default" size="default" @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import useUserStore from '../../store/modules/user';
import { ElNotification, type FormRules } from 'element-plus';
import { useRouter } from 'vue-router';
import { getCurrentTimePeriod } from '@/utils/time';

const userStore = useUserStore();
const $router = useRouter();
let loading = ref(false);

const loginForm = reactive({
    username: 'admin',
    password: '111111'
});

let loginFormRef = ref();

const login = async () => {
    // 校验表单
    await loginFormRef.value.validate();
    try {
        loading.value = true;
        await userStore.userLogin(loginForm);
        // 编程式导航跳转到首页
        $router.push({ path: '/' });
        ElNotification({
            title: `HI, ${getCurrentTimePeriod()}好`,
            message: `欢迎回来，${loginForm.username}`,
            type: 'success',
            duration: 3000
        });
    } catch (error) {
        ElNotification({
            title: '登录失败',
            message: (error as Error).message,
            type: 'error',
            duration: 3000
        });
    } finally {
        loading.value = false;
    }
};

// 自定义校验规则
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('密码不能为空'))
  } else {
    callback()
  }
}

const rules = reactive<FormRules>({
  username: [
    { required: true, min: 5, max: 10, message: '用户名长度在5到10位之间', trigger: 'change' }
  ],
  password: [
    { required: true, validator: validatePass, trigger: 'change' }
  ]
});
</script>

<style scoped lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;
    .login_form{
        position: relative;
        width: 80%;
        top:30vh;
        background: url('@/assets/images/login_form.png') no-repeat;
        background-size: cover;
        padding: 40px;
        h1{
            color: white;
            font-size: 40px;
        }
        h2{
            color: white;
            font-size: 20px;
            margin: 20px 0px;
        }
        .login_btn{
            width: 100%;
        }
    }
}
</style>