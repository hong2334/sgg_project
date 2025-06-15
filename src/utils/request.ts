// 对axios的二次封装，使用请求和响应拦截器
import axios from "axios"
import { ElMessage } from "element-plus";
import useUserStore from "@/store/modules/user";

let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API, // 基础路径上会携带/api
    timeout: 10000, // 设置请求超时时间
});
// 对实例添加请求和响应拦截器
request.interceptors.request.use((config) => {
    let userStore = useUserStore();
    if(userStore.token) {
        config.headers.token = userStore.token;
    }
    
    // 配置请求头
    // 返回配置对象
    return config;
});

request.interceptors.response.use((response) => {
    // 成功回调
    return response.data; // 直接返回响应数据
}, (error) => {
    // 失败回调，一般处理网络错误
    // 定义一个变量，存储网络错误信息
    let message = '';
    let status = error.response.status;
    switch (status) {
        case 401:
            message = 'TOKEN过期';
            break;
        case 403:
            message = '没有权限，无法访问';
            break;
        case 404:
            message = '请求的资源不存在';
            break;
        default:
            message = '网络错误，请稍后重试';
    }
    // 提示错误信息
    ElMessage({
        type: 'error',
        message
    });
    return Promise.reject(error);
})


export default request;