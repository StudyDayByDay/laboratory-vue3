// 这个是用来设置路由信息的文件
// 不同模块的路由信息
// 总的导出的路由信息
const routes = [{
    path: '/',
    name: '首页',
    component: () => import('../views/layout/index.vue'),
    redirect: {name: 'Hello'},
    children: [
        {
            path:'hello',
            name: 'Hello',
            component: () => import('../components/HelloWorld.vue')
        }
    ]
}];

export default routes;