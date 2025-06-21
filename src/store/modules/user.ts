// 创建用户相关的小仓库
import { defineStore } from 'pinia';
import { reqLogin, reqUserInfo, reqLogout } from '../../api/user';
import type { UserState } from './type/type';
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '../../utils/token';
import { constantRouter } from '@/router/routes';
import type { LoginFormData, LoginResponseData, userInfoResponseData } from "@/api/user"

let useUserStore = defineStore('user', {
    // 小仓库存储数据地方
    state: (): UserState => {
        return {
            token: GET_TOKEN(), // 用户登录的token
            menuRoutes: constantRouter, // 仓库存储生成菜单需要数组
            username: '',
            avatar: ''
        }
    },
    // 异步 | 逻辑的地方
    actions: {
        // 用户登录
        async userLogin(data: LoginFormData) {
            let res: LoginResponseData = await reqLogin(data);
            if (res.code === 200) {
                // 登录成功
                this.token = (res.data as string);
                // 存储用户信息到本地存储
                SET_TOKEN((res.data as string));
                return 'ok';
            } else {
                // 登录失败
                return Promise.reject(new Error(res.message));
            }
        },
        async userInfo() {
            let result: userInfoResponseData = await reqUserInfo();
            if (result.code == 200) {
                this.username = result.data.name;
                this.avatar = result.data.avatar;
                return 'ok'
            } else {
                return Promise.reject('获取用户信息失败');
            }
        },
        async userLogout() {
            let result = await reqLogout();
            if (result.code == 200) {
                this.username = '';
                this.avatar = '';
                this.token = '';
                REMOVE_TOKEN();
            } else {
                return Promise.reject('退出登录失败');
            }
        }
    },
    getters: {
    }
})

export default useUserStore;