// 创建用户相关的小仓库
import { defineStore } from 'pinia';
import { reqLogin } from '../../api/user';
import type { LoginForm, LoginResponse } from '../../api/user/type';
import type { UserState } from './type/type';
import { SET_TOKEN, GET_TOKEN } from '../../utils/token';

let useUserStore = defineStore('user', {
    // 小仓库存储数据地方
    state: (): UserState => {
        return {
            token: GET_TOKEN(), // 用户登录的token
        }
    },
    // 异步 | 逻辑的地方
    actions: {
        // 用户登录
        async userLogin(data: LoginForm) {
            let res: LoginResponse = await reqLogin(data);
            if (res.code === 200) {
                // 登录成功
                this.token = (res.data.token as string);
                // 存储用户信息到本地存储
                SET_TOKEN((res.data.token as string));
                return 'ok';
            } else {
                // 登录失败
                return Promise.reject(new Error('账号或密码不正确'));
            }
        }
    },
    getters: {
    }
})

export default useUserStore;