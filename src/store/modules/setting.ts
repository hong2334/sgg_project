// 定义菜单折叠相关的仓库

import { defineStore } from 'pinia';

let userLayoutSettingStore = defineStore('SettingStore', {
    state:()=>{
        return  {
            fold: false,// 用户控制菜单折叠还是收起控制
            refresh: false,// 用于控制刷新页面
        }
    }
})

export default userLayoutSettingStore;