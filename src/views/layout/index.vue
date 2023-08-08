<template>
  <div class="layout">
    <div class="layout-header">
      <div class="logo">logo</div>
      <div class="flex-item-1"></div>
      <div class="menu">
        <a-menu v-model:selectedKeys="selectedKeys" mode="horizontal" :open-keys="openKeys" :inline-collapsed="!open" @openChange="onOpenChange" @click="menuClick">
          <template v-for="item in menus" :key="item.key">
            <template v-if="!item.children">
              <a-menu-item :key="item.key">
                <template #icon>
                  <span :class="item.icon"></span>
                </template>
                {{ item.title }}
              </a-menu-item>
            </template>
            <template v-else>
              <a-sub-menu :key="item.key" :title="item.title">
                <template #icon>
                  <span :class="item.icon"></span>
                </template>
                <a-menu-item v-for="ite in item.children" :key="ite.key">{{ ite.title }}</a-menu-item>
              </a-sub-menu>
            </template>
          </template>
        </a-menu>
      </div>
    </div>
    <div class="layout-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
// TODO:下一步来定制主题、排版、样式
import {ref, watchEffect} from 'vue';
import {routesToMenus} from '@utils/menu.js';
import {menuRoutes} from '@/routers/routes.js';
import {useRouter, useRoute} from 'vue-router';

const router = useRouter();
const route = useRoute();
const menus = routesToMenus(menuRoutes);
const rootSubmenuKeys = ref(menus.map((ite) => ite.key));
const openKeys = ref([]);
const selectedKeys = ref([]);
const open = ref(true);

// 处理刷新逻辑
watchEffect(() => {
  selectedKeys.value.shift();
  selectedKeys.value.push(route.name);
  document.title = route.meta.title;
});
// 导航打开逻辑
const onOpenChange = (e) => {
  const latestOpenKey = e.find((key) => openKeys.value.indexOf(key) === -1);
  if (rootSubmenuKeys.value.indexOf(latestOpenKey) === -1) {
    openKeys.value = e;
  } else {
    openKeys.value = latestOpenKey ? [latestOpenKey] : [];
  }
};
// 点击菜单
const menuClick = (e) => {
  // router要写在外面
  if (e.key !== route.name) {
    router.push({
      name: e.key,
    });
  }
};
</script>

<style scoped lang="less">
// vite提供了对.scss, .sass, .less, .styl 和 .stylus 文件的内置支持
// 不用为他们安装特定的vite插件，但是必须安装相应的预处理器依赖
.layout {
  width: 100%;
  height: 100%;
  &-header {
    height: 46px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
  }
  &-content {
    height: calc(100% - 46px);
  }
}
.flex-item-1 {
  flex: 1;
}
:deep(.ant-menu-horizontal) {
  border-bottom: 0;
}
</style>
