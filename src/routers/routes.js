// 这个是用来设置路由信息的文件
// 不同模块的路由信息
// 总的导出的路由信息
import Layout from '@views/layout/index.vue';
import notFound from '@views/NotFound/notFound.vue';
import mainPage from '@views/mainPage/index.vue';
const antd = [
  {
    path: '/table',
    name: 'table',
    component: () => import('@views/antd/table.vue'),
    meta: {
      title: '表格',
    },
  },
];

const elementUI = [
  {
    path: '/tree',
    name: 'tree',
    component: () => import('@views/elementUI/tree.vue'),
    meta: {
      title: '树',
    },
  },
];

const HTML = [
  {
    path: '/newElement',
    name: 'newElement',
    component: () => import('@views/HTML/newElement.vue'),
    meta: {
      title: '新元素',
    },
  },
];

const CSS = [
  {
    path: '/animation',
    name: 'animation',
    component: () => import('@views/CSS/animation.vue'),
    meta: {
      title: '下雨效果',
    },
  },
  {
    path: '/animationPlus',
    name: 'animationPlus',
    component: () => import('@views/CSS/animationPlus.vue'),
    meta: {
      title: '下雨效果Plus',
    },
  },
  {
    path: '/bgword',
    name: 'bgword',
    component: () => import('@views/CSS/bgword.vue'),
    meta: {
      title: '背景文字效果',
    },
  },
  {
    path: '/pictureView',
    name: 'pictureView',
    component: () => import('@views/CSS/pictureView.vue'),
    meta: {
      title: '图片预览效果',
    },
  },
  {
    path: '/fluid',
    name: 'fluid',
    component: () => import('@views/CSS/fluid.vue'),
    meta: {
      title: '流动布局效果',
    },
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('@views/CSS/button.vue'),
    meta: {
      title: '气死前端的按钮？',
    },
  },
  {
    path: '/dingding',
    name: 'dingding',
    component: () => import('@views/CSS/dingding.vue'),
    meta: {
      title: '钉钉官网效果',
    },
  },
];

const JavaScript = [
  {
    path: '/class',
    name: 'class',
    component: () => import('@views/JavaScript/class.vue'),
    meta: {
      title: '类',
    },
  },
  {
    path: '/file',
    name: 'file',
    component: () => import('@views/JavaScript/file.vue'),
    meta: {
      title: '文件',
    },
  },
  {
    path: '/fileUpload',
    name: 'fileUpload',
    component: () => import('@views/JavaScript/fileUpload.vue'),
    meta: {
      title: '文件上传',
    },
  },
];

const VUE = [
  {
    path: '/vue-router',
    name: 'vue-router',
    component: () => import('@views/VUE/vueRouter.vue'),
    meta: {
      title: 'vue-router',
    },
  },
  {
    path: '/extends',
    name: 'extends',
    component: () => import('@views/VUE/vueExtends.vue'),
    meta: {
      title: 'extends使用',
    },
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('@views/VUE/vueEvent.vue'),
    meta: {
      title: '事件透传',
    },
  },
  {
    path: '/render',
    name: 'render',
    component: () => import('@views/VUE/render.vue'),
    meta: {
      title: 'render函数',
    },
  },
];

const configs = [
  {
    path: '/esLint',
    name: 'esLint',
    component: () => import('@views/configs/esLint.vue'),
    meta: {
      title: 'esLint',
    },
  },
  // vite
  // vue-cli
  // stylelint
  // babel
];

const plugins = [
  {
    path: '/dhtmlxGantt',
    name: 'dhtmlxGantt',
    component: () => import('@views/plugins/dhtmlxGantt.vue'),
    meta: {
      title: 'dhtmlxGantt',
    },
  },
  {
    path: '/v-draggable',
    name: 'v-draggable',
    component: () => import('@views/plugins/v-draggable.vue'),
    meta: {
      title: 'v-draggable',
    },
  },
  {
    path: '/vue3-seamless-scroll',
    name: 'vue3-seamless-scroll',
    component: () => import('@views/plugins/vue3-seamless-scroll.vue'),
    meta: {
      title: 'vue3-seamless-scroll',
    },
  },
];

const menuRoutes = [
  // main
  {
    path: '/main',
    name: 'main',
    meta: {
      title: '主页',
      menu: {
        icon: {
          type: 'iconfont',
          iconfont: 'iconMe-shouye',
        },
      },
    },
  },
  // antd
  {
    path: '/antd',
    name: 'antd',
    meta: {
      title: 'Ant Design Vue',
      menu: {
        icon: {
          type: 'iconfont',
          iconfont: 'iconMe-antdesign',
        },
        children: antd,
      },
    },
  },
  // elementUI
  {
    path: '/elementUI',
    name: 'elementUI',
    meta: {
      title: 'element-plus',
      menu: {
        icon: {
          type: 'iconfont',
          iconfont: 'iconMe-elment',
        },
        children: elementUI,
      },
    },
  },
  // HTML
  {
    path: '/HTML',
    name: 'HTML',
    meta: {
      title: 'HTML',
      menu: {
        icon: {
          type: 'iconfont',
          iconfont: 'iconMe-html5',
        },
        children: HTML,
      },
    },
  },
  // CSS
  {
    path: '/CSS',
    name: 'CSS',
    meta: {
      title: 'CSS',
      menu: {
        icon: {
          type: 'iconfont',
          iconfont: 'iconMe-css',
        },
        children: CSS,
      },
    },
  },
  // Javascript
  {
    path: '/JavaScript',
    name: 'JavaScript',
    meta: {
      title: 'JavaScript',
      menu: {
        icon: {
          type: 'iconfont',
          iconfont: 'iconMe-javascript',
        },
        children: JavaScript,
      },
    },
  },
  // VUE
  {
    path: '/VUE',
    name: 'VUE',
    meta: {
      title: 'VUE',
      menu: {
        icon: {
          type: 'iconfont',
          iconfont: 'iconMe-vue',
        },
        children: VUE,
      },
    },
  },
  // 项目配置
  {
    path: '/configs',
    name: 'configs',
    meta: {
      title: '项目配置',
      menu: {
        icon: {
          type: 'iconfont',
          iconfont: 'iconMe-config',
        },
        children: configs,
      },
    },
  },
  // 插件
  {
    path: '/plugins',
    name: 'plugins',
    meta: {
      title: '各种插件',
      menu: {
        icon: {
          type: 'iconfont',
          iconfont: 'iconMe-chajian1',
        },
        children: plugins,
      },
    },
  },
];

const routes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: {name: 'main'},
    children: [
      {
        path: 'main',
        name: 'main',
        component: mainPage,
        meta: {
          title: '主页',
        },
      },
      ...antd,
      ...elementUI,
      ...HTML,
      ...CSS,
      ...JavaScript,
      ...VUE,
      ...configs,
      ...plugins,
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: notFound,
        meta: {
          title: '404',
        },
      },
    ],
  },
];

export {menuRoutes, routes};
