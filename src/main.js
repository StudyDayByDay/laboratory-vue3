import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@assets/iconfont/iconfont.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './routers/index';

const app = createApp(App);

app.use(Antd);
app.use(router);
// 处理在create中取不到this.$route的数据的解决办法。router4.0有一个特点就是所有导航都是异步了
router.isReady().then(() => {
    app.mount('#app');
});