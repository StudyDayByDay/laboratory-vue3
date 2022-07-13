<template>
  <div class="layout">
      <div class="layout-header">
            <a-menu v-model:selectedKeys="selectedKeys" style="width: 256px" mode="inline" :open-keys="openKeys" @openChange="onOpenChange" @click="menuClick">
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
                            <a-menu-item v-for="(ite) in item.children" :key="ite.key">{{ite.title}}</a-menu-item>
                        </a-sub-menu>
                    </template>
                </template>
            </a-menu>
      </div>
      <div class="layout-content">
          <router-view></router-view>
      </div>
  </div>
</template>

<script setup>
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { reactive, ref, watchEffect } from 'vue';
import {routesToMenus} from '@utils/menu.js';
import {menuRoutes} from '@/routers/routes.js';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const menus = routesToMenus(menuRoutes);
const rootSubmenuKeys = ref(menus.map(ite => ite.key));
const openKeys = ref([]);
const selectedKeys = ref([]);

// 处理刷新逻辑
watchEffect(() => {
    selectedKeys.value.shift();
    selectedKeys.value.push(route.name);
    document.title = route.meta.title;
});
// 导航打开逻辑
const onOpenChange = e => {
    const latestOpenKey = e.find(key => openKeys.value.indexOf(key) === -1);
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
            name: e.key
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
    display: grid;
    grid-template-columns: 256px auto;
    grid-template-rows: 100%;
    &-header {
        user-select: none;
    }
    &-content {
        background-color: #f6f2f2;
    }
}
</style>