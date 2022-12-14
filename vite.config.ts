import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPLugin from 'vite-plugin-eslint'
import { resolve } from 'path'
import viteCompression from 'vite-plugin-compression'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from "rollup-plugin-visualizer"

// https://vitejs.dev/config/
export default defineConfig({
  // 配置别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  plugins: [
    vue(), 
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // vite按需
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
    eslintPLugin(),
    visualizer(),
    // gizp压缩 生产环境生产 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/main.scss";',
      },
    },
  },
  // 生产环境打包配置
})
