<template>
  <div class="layout">
      <div class="layout-header">
          <div class="layout-header-title">集合</div>
          <div class="layout-header-content">
              <a-menu v-model:selectedKeys="selectedKeys" style="width: 256px" mode="inline" :open-keys="openKeys" @openChange="onOpenChange">
                <template v-for="item in menus" :key="item.key">
                    <template v-if="!item.children">
                        <a-menu-item :key="item.key">
                            <template #icon>
                                <PieChartOutlined />
                            </template>
                            {{ item.title }}
                        </a-menu-item>
                    </template>
                    <template v-else>
                        <a-sub-menu :key="item.key" :title="item.title">
                            <template #icon>
                                <MailOutlined />
                            </template>
                            <a-menu-item v-for="(ite) in item.children" :key="ite.key">{{ite.title}}</a-menu-item>
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
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { reactive, ref } from 'vue';
import {routesToMenus} from '@utils/menu.js';
import {menuRoutes} from '@/routers/routes.js';

const menus = routesToMenus(menuRoutes);
const rootSubmenuKeys = ref(menus.map(ite => ite.key));
const openKeys = ref([]);
const selectedKeys = ref(['main']);
const onOpenChange = e => {
    const latestOpenKey = e.find(key => openKeys.value.indexOf(key) === -1);
    if (rootSubmenuKeys.value.indexOf(latestOpenKey) === -1) {
        openKeys.value = e;
    } else {
        openKeys.value = latestOpenKey ? [latestOpenKey] : [];
    }
};
</script>

<style scoped>
.layout {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 256px auto;
    grid-template-rows: 100%;
}

.layout .layout-header {
    /* background-color: pink; */
}

.layout .layout-header .layout-header-title {
    height: 32px;
    /* background-color: aqua; */
}

.layout .layout-header .layout-header-content {
    height: calc(100% - 32px);
}
.layout .layout-content {
    background-color: #f6f2f2;
}
</style>