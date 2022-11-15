<template>
    <div class="gant">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="planTable" tab="计划表"/>
        <a-tab-pane key="planChart" tab="计划图"/>
      </a-tabs>
      <!-- is要使用字符串的形式来控制组件的话，就需要把组件注册。不注册就直接用这种对象的方式 -->
      <component :is="activeKey === 'planTable' ? planTable : planChart"></component>
    </div>
  </template>
  
<script setup>
import {reactive, ref, onMounted} from 'vue';
import planChart from './components/planChart';
import planTable from './components/planTable';
// 当前key
const activeKey = ref('planTable');
</script>
  
<style lang="less" scoped>
.gant {
  width: 100%;
  height: 100%;
}
</style>