// 统一管理用户相关的接口
import  request  from '../../utils/request';
import type { LoginForm, LoginResponse, UserResponseData } from './type';

enum API {
    LOGIN_URL = '/user/login',
    USER_INFO_URL = '/user/info'
}

export const reqLogin = (data: LoginForm) => request.post<any, LoginResponse>(API.LOGIN_URL, data);

export const reqUserInfo = () => request.get<any, UserResponseData>(API.USER_INFO_URL);