// 路由鉴权的文件，项目当中的路由能不能被访问的设置
import router from './router/index'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"

// 全局守卫：项目当中任意路由切换都会触发的钩子
// 全局前置守卫
router.beforeEach((to: any, from: any, next: any) => {
    console.log(to)
    console.log(from)
    console.log('全局前置守卫')
    nprogress.start();
    next();
})
// 全局后置守卫
router.afterEach((to: any, from: any) => {
    nprogress.done();
    console.log('全局后置守卫')
})