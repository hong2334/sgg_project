// 路由鉴权的文件，项目当中的路由能不能被访问的设置
import router from './router/index'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
import useUserStore from './store/modules/user'
import pinia from './store'
import setting from './setting'

nprogress.configure({ showSpinner: false });

let userStore = useUserStore(pinia);
let username = userStore.username;

// 全局守卫：项目当中任意路由切换都会触发的钩子
// 任意路由实现进度条业务
// 路由鉴权
// 全部路由组件

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title + ` | ${setting.title}`
  nprogress.start()
  const token = userStore.token
  const username = userStore.username
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (username) {
        next()
      } else {
        try {
          await userStore.userInfo()
          next();
        } catch (error) {
          await userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})
// 全局后置守卫
router.afterEach((to: any, from: any) => {
    nprogress.done();
})