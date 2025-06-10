import { createRouter, createWebHashHistory  } from "vue-router";
import { constantRouter } from "./routes";

let rounter = createRouter({
    // 路由模式hash
    history: createWebHashHistory(),
    routes: constantRouter,
    // 路由滚动行为
    scrollBehavior() {
        return { top: 0, left: 0 };
    }
})

export default rounter;