// 定义菜单折叠相关的仓库

import { defineStore } from 'pinia';

let userLayoutSettingStore = defineStore('SettingStore', {
    state:()=>{
        return  {
            fold: false,// 用户控制菜单折叠还是收起控制
        }
    }
})

export default userLayoutSettingStore;