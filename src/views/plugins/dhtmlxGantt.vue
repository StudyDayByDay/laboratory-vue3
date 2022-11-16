<template>
    <div class="gant">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="planTable" tab="计划表"/>
        <a-tab-pane key="planChart" tab="计划图"/>
      </a-tabs>
      <!-- is要使用字符串的形式来控制组件的话，就需要把组件注册。不注册就直接用这种对象的方式 -->
      <component :is="activeKey === 'planTable' ? planTable : planChart" :formData="formData"></component>
    </div>
  </template>
  
<script setup>
import {reactive, ref, onMounted} from 'vue';
import dayjs from 'dayjs';
import planChart from './components/planChart';
import planTable from './components/planTable';
// 当前key
const activeKey = ref('planTable');
const formData = reactive([
  {id: 1, icon: 'iconMe-chajian1', planStart: dayjs('2022-07-06', 'YYYY-MM-DD'), planEnd: dayjs('2024-08-14', 'YYYY-MM-DD'), actualStart: dayjs('2022-07-06', 'YYYY-MM-DD'), actualEnd: dayjs('2022-07-31', 'YYYY-MM-DD'), chargeMan: '主题选定', role: undefined},
  {id: 2, icon: 'iconMe-elment', planStart: dayjs('2022-07-06', 'YYYY-MM-DD'), planEnd: dayjs('2022-07-15', 'YYYY-MM-DD'), actualStart: dayjs('2022-07-06', 'YYYY-MM-DD'), actualEnd: dayjs('2022-11-15', 'YYYY-MM-DD'), chargeMan: '拟定活动计划书', role: undefined},
  {id: 3, icon: 'iconMe-shouye', planStart: dayjs('2022-07-09', 'YYYY-MM-DD'), planEnd: dayjs('2022-07-19', 'YYYY-MM-DD'), actualStart: dayjs('2022-07-07', 'YYYY-MM-DD'), actualEnd: dayjs('2022-07-26', 'YYYY-MM-DD'), chargeMan: '现状把握', role: undefined},
  {id: 4, icon: 'iconMe-html5', planStart: dayjs('2022-07-06', 'YYYY-MM-DD'), planEnd: dayjs('2022-07-28', 'YYYY-MM-DD'), actualStart: dayjs('2022-07-06', 'YYYY-MM-DD'), actualEnd: dayjs('2022-07-21', 'YYYY-MM-DD'), chargeMan: '目标设定', role: undefined},
  {id: 5, icon: 'iconMe-javascript', planStart: dayjs('2022-07-06', 'YYYY-MM-DD'), planEnd: dayjs('2022-07-19', 'YYYY-MM-DD'), actualStart: dayjs('2022-07-06', 'YYYY-MM-DD'), actualEnd: dayjs('2022-07-21', 'YYYY-MM-DD'), chargeMan: '解析', role: undefined},
  {id: 6, icon: 'iconMe-css', planStart: dayjs('2022-07-06', 'YYYY-MM-DD'), planEnd: dayjs('2022-07-18', 'YYYY-MM-DD'), actualStart: dayjs('2022-07-07', 'YYYY-MM-DD'), actualEnd: dayjs('2022-07-19', 'YYYY-MM-DD'), chargeMan: '对策拟定', role: undefined},
]);
</script>
  
<style lang="less" scoped>
.gant {
  width: 100%;
  height: 100%;
}
</style>