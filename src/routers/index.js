// 这个是router的配置页面
import { createRouter, createWebHashHistory } from "vue-router";
import {routes} from './routes';
import nProgress from "nprogress";

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from) => {
    nProgress.start();
    console.log(to, 'to');
    return true;
});

router.afterEach((to, from) => {
    nProgress.done();
});
export default router;