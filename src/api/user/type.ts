// 登录接口需要携带的参数
export interface LoginForm {
    username: string;
    password: string;
}

// 用登录接口返回数据类型
export interface LoginResponse {
    code: number;
    data: dataType;
}

interface dataType {
    token?: string;
    message?: string;
}

// 定义服务器返回用户信息相关的数据类型
interface userInfo {
    userId: number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string,
}

interface user {
    checkUser: userInfo;
}

export interface UserResponseData {
    code: number;
    data: user;
}

