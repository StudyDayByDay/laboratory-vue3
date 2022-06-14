import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 别名配置
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@apis': resolve(__dirname, 'src/apis'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@plugins': resolve(__dirname, 'src/plugins'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@views': resolve(__dirname, 'src/views'),
    },
    // 扩展名称省略
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  server: {
    // 启动自动打开页面
    open: true,
  }
})
