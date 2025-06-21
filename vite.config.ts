import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
// https://vite.dev/config/
export default defineConfig(({command, mode}) => {
  // 获取各种环境下的对应的变量
  let env = loadEnv(mode, process.cwd());// process.cwd(), 根目录中index.html的位置

  console.log(`当前环境: ${mode}`)
  console.log(`API前缀: ${env.VITE_APP_BASE_API}`)
  console.log(`代理目标: ${env.VITE_SERVE}`)

  // 判断是否启用mock服务
  const isMockEnabled = command === 'serve' && env.VITE_USE_MOCK === 'true'

  return {
    base: './',
    plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    viteMockServe({
      enable: false, // 开发环境启用 mock
    })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src') // 配置 @ 指向 src 目录
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "@/styles/variable.scss";'
        }
      }
    },
    // 代理跨域
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          // 获取数据的服务器地址设置
          target: env.VITE_SERVE,
          // 需要代理跨域
          changeOrigin: true,
          // 路劲重写
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    },
  }
})
