<template>
    <div style="width: 100%; height: 100%;">
      <div ref="ganttRef" class="left-container" />
    </div>
  </template>
  
<script setup>
import moment from 'moment';
import gantt from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import {reactive, ref, onMounted} from 'vue';
import {originData, basicData} from './utils/data';
// ref
const ganttRef = ref(null);
// 数据
const tasks = reactive({data: []});
const ganttConfig = () => {
  // 显示连线
  gantt.config.show_links = true;
  // 显示进度
  gantt.config.show_progress = true;
  // gantt.config.drag_progress = false;
  gantt.plugins({marker: true, tooltip: true}); // 开启marker插件
  const dateToStr = gantt.date.date_to_str(gantt.config.task_date);
  const today = new Date();
      // 添加固定时间线
  gantt.addMarker({
    start_date: today,
    css: 'today',
    text: '今日:' + moment(new Date()).format('YYYY-MM-DD'),
    title: 'Today: ' + dateToStr(today)
  });
  // 模板定义-长条上的文字
  // gantt.templates.task_text = function (start, end, task) {
  //   return '<b>Text:</b> ' + task.text + ',<b> Holders:</b> ' + task.users;
  // };
  // 提示框内容
  gantt.templates.tooltip_text = (start, end, task) => {
    return '<b>任务内容:</b>' + task.text +
        '<br/><b>计划开始:</b> ' + task.start_date +
        '<br/><b>持续时间:</b> ' + task.duration +
        '<br/><b>进度:</b> ' + task.progress;
  };
  
  // gantt.config.scale_unit = 'year';
  // gantt.config.step = 1;
  // gantt.config.date_scale = '%Y';
  // // 当右侧不止显示年份时，可以添加展示月日，添加一个就加一行
  // gantt.config.subscales = [
  //   {unit: 'month', step: 1, date: '%m'},
  // ];
  // 甘特图右侧表头的高度
  gantt.config.scale_height = 80;
  // 使用中文
  gantt.i18n.setLocale('cn');
  // 自适应甘特图的尺寸大小, 使得在不出现滚动条的情况下, 显示全部任务
  gantt.config.autosize = true;
  // 只读模式
  // gantt.config.readonly = true;
  // 是否显示左侧树表格
  gantt.config.show_grid = true;
  // 表格列设置
  gantt.config.columns = [
    {name: 'text', label: '任务内容', width: '120', align: 'center'},
    {name: 'start_date', label: '计划开始', width: '100', align: 'center'},
    {name: 'duration', label: '持续时间', width: '100', align: 'center'},
    {name: 'progress', label: '进度', width: '100', align: 'center'},
  ];
  // 任务条上的文字大小 以及取消border自带样式
  gantt.templates.task_class = function () {
    return 'firstLevelTask';
  };
  // 初始化
  gantt.init(ganttRef.value);
      // 数据解析
  gantt.parse(basicData);
};

onMounted(() => {
  ganttConfig();
});
</script>
  
  <style>
  </style>