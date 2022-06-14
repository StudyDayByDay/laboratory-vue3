<template>
  <div class="layout">
      <div class="layout-header">
          <div class="layout-header-title">kun的网站</div>
          <div class="layout-header-content">
              <a-menu
                v-model:selectedKeys="selectedKeys"
                style="width: 256px"
                mode="inline"
                :open-keys="openKeys"
                @openChange="onOpenChange"
                >
                <a-sub-menu key="sub1">
                    <template #icon>
                    <MailOutlined />
                    </template>
                    <template #title>Navigation One</template>
                    <a-menu-item key="1">Option 1</a-menu-item>
                    <a-menu-item key="2">Option 2</a-menu-item>
                    <a-menu-item key="3">Option 3</a-menu-item>
                    <a-menu-item key="4">Option 4</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <template #icon></template>
                    <template #title>
                    <AppstoreOutlined />
                    Navigation Two
                    </template>
                    <a-menu-item key="5">Option 5</a-menu-item>
                    <a-menu-item key="6">Option 6</a-menu-item>
                    <a-sub-menu key="sub3" title="Submenu">
                    <a-menu-item key="7">Option 7</a-menu-item>
                    <a-menu-item key="8">Option 8</a-menu-item>
                    </a-sub-menu>
                </a-sub-menu>
                <a-sub-menu key="sub4">
                    <template #icon>
                    <SettingOutlined />
                    </template>
                    <template #title>Navigation Three</template>
                    <a-menu-item key="9">Option 9</a-menu-item>
                    <a-menu-item key="10">Option 10</a-menu-item>
                    <a-menu-item key="11">Option 11</a-menu-item>
                    <a-menu-item key="12">Option 12</a-menu-item>
                </a-sub-menu>
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
import { ref } from 'vue';

const state = ref({
    rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
    openKeys: ['sub1'],
    selectedKeys: [],
});

const onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);

    if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    state.openKeys = openKeys;
    } else {
    state.openKeys = latestOpenKey ? [latestOpenKey] : [];
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
    background-color: pink;
}

.layout .layout-header .layout-header-title {
    height: 32px;
    background-color: aqua;
}

.layout .layout-header .layout-header-content {
    height: calc(100% - 32px);
}
.layout .layout-content {
    background-color: #9e3b3b;
}
</style>