/* eslint-disable no-undef */
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      // 增加下面的配置项,这样在运行时就能检查eslint规范
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
      // 为啥我这里的exclude没起作用
      exclude: ['/*.js', '/node_modules/'],
    })
  ],
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
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: "import { h } from 'vue';"
  },
  server: {
    // 启动自动打开页面
    open: true,
  }
});
