<template>
    <a-radio-group v-model:value="time" button-style="solid" @change="timeChange">
      <a-radio-button value="year">年</a-radio-button>
      <a-radio-button value="month">月</a-radio-button>
      <a-radio-button value="week">周</a-radio-button>
      <a-radio-button value="day">日</a-radio-button>
      <a-radio-button value="hour">时</a-radio-button>
    </a-radio-group>
    <div class="plan-chart" ref="ganttRef"></div>
</template>

<script setup>
import moment from 'moment';
import gantt from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import {reactive, ref, defineProps, onMounted} from 'vue';
import {basicData} from '../utils/data';


const props = defineProps(['formData']);
// ref
const ganttRef = ref(null);
// 时间type
const time = ref('day');
// 数据
const tasks = reactive({data: []});
const ganttConfig = () => {
  // 显示连线
  gantt.config.show_links = true;
  // 显示进度
  gantt.config.show_progress = true;
  // gantt.config.drag_progress = false;
  gantt.plugins({marker: true, tooltip: true}); // 开启marker插件
  // 返回dateToStr函数，将本地时间转换成相应格式
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
  // 设置周末隐藏，次功能仅在专业版可用
  // gantt.ignore_time = (date) => {
  //   if (date.getDay() === 0 || date.getDay() === 6) {
  //     return true;
  //   }
  // };
  // 设置周末高亮
  gantt.templates.timeline_cell_class = (item, date) => {
    if (time.value === 'day' && (date.getDay() === 0 || date.getDay() === 6)) {return 'weekend';} return '';
  };
  // 日期格式https://docs.dhtmlx.com/gantt/desktop__date_format.html
  gantt.config.scales = [
    {unit: 'year', step: 1, format: '%Y年'},
    {unit: 'month', step: 1, format: '%Y-%n'},
    {unit: 'week', step: 1, format: '第%W周'},
    {unit: 'day', step: 1, format: '周%D'},
    {unit: 'day', step: 1, format: '%j'},
  ];
  // 甘特图右侧表头的高度
  gantt.config.scale_height = 90;
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
    {name: 'text', label: '步骤', width: '120', align: 'center'},
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

const timeChange = (e) => {
  const {target: {value}} = e;
  console.log(value, '123');
  switch (value) {
    case 'year':
      gantt.config.scales = [
        {unit: 'year', step: 1, format: '%Y年'},
      ];
      break;
    case 'month':
      gantt.config.scales = [
        {unit: 'year', step: 1, format: '%Y年'},
        {unit: 'month', step: 1, format: '%Y-%n'},
      ];
      break;
    case 'week':
      gantt.config.scales = [
        {unit: 'year', step: 1, format: '%Y年'},
        {unit: 'month', step: 1, format: '%Y-%n'},
        {unit: 'week', step: 1, format: '第%W周'},
      ];
      break;
    case 'day':
      gantt.config.scales = [
        {unit: 'year', step: 1, format: '%Y年'},
        {unit: 'month', step: 1, format: '%Y-%n'},
        {unit: 'week', step: 1, format: '第%W周'},
        {unit: 'day', step: 1, format: '周%D'},
        {unit: 'day', step: 1, format: '%j'},
      ];
      break;
    case 'hour':
      gantt.config.scales = [
        {unit: 'year', step: 1, format: '%Y年'},
        {unit: 'month', step: 1, format: '%Y-%n'},
        {unit: 'week', step: 1, format: '第%W周'},
        {unit: 'day', step: 1, format: '周%D'},
        {unit: 'day', step: 1, format: '%j'},
        {unit: 'hour', step: 1, format: '%G'},
      ];
      break;
    default:
      break;
  }
  // 初始化
  gantt.init(ganttRef.value);
      // 数据解析
  gantt.parse(basicData);
};

onMounted(() => {
  ganttConfig();
});
</script>

<style lang="less">
.plan-chart {
    width: 100%;
    height: 100%;
    margin-top: 10px;
}
.weekend{
    background: #bfbfbf;
}
</style>
