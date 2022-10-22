<template>
    <div style="width: 100%; height: 100%;">
      <div class="legend">
        <div class="legendBox">
          <div class="legendSml legendColor1"></div>
          <div>计划时间</div>
        </div>
        <div class="legendBox">
          <div class="legendSml legendColor2"></div>
          <div>相交时间</div>
        </div>
        <div class="legendBox">
          <div class="legendSml legendColor3"></div>
          <div>实际时间</div>
        </div>
      </div>
      <div ref="ganttRef" class="left-container" />
    </div>
  </template>
  
<script setup>
import moment from 'moment';
import gantt from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import {reactive, ref, onMounted} from 'vue';
import {originData} from './utils/data';
// ref
const ganttRef = ref(null);
// 数据
const tasks = reactive({data: []});
const ganttConfig = () => {
  gantt.config.show_progress = false;
   // 根据定义类型判断颜色顺序
  gantt.templates.task_text = function (start, end, task) {
    let colorType = task.colorType;
    if (colorType === 'j12' || colorType === 'one') {
      return (
        renderLabel(task.progress1, 1, task.state) +
            renderLabel(task.progress2, 2, task.state) +
            renderLabel(task.progress3, 3, task.state)
      );
    } if (colorType === 'j21') {
      return (
        renderLabel(task.progress1, 3, task.state) +
            renderLabel(task.progress2, 2, task.state) +
            renderLabel(task.progress3, 1, task.state)
      );
    } if (colorType === 'b12') {
      return (
        renderLabel(task.progress1, 1, task.state) +
            renderLabel(task.progress2, 2, task.state) +
            renderLabel(task.progress3, 1, task.state)
      );
    } if (colorType === 'b21') {
      return (
        renderLabel(task.progress1, 3, task.state) +
            renderLabel(task.progress2, 2, task.state) +
            renderLabel(task.progress3, 3, task.state)
      );
    } if (colorType === 'l12') {
      return (
        renderLabel(task.progress1, 1, task.state) +
            renderLabel(task.progress2, 2, task.state) +
            renderLabel(task.progress3, 3, task.state)
      );
    } if (colorType === 'l21') {
      return (
        renderLabel(task.progress1, 3, task.state) +
            renderLabel(task.progress2, 2, task.state) +
            renderLabel(task.progress3, 1, task.state)
      );
    } 
    return (
      renderLabel(task.progress1, 1, task.state) +
            renderLabel(task.progress2, 2, task.state) +
            renderLabel(task.progress3, 3, task.state)
    );
        
  };
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
  // 提示框内容
  gantt.templates.tooltip_text = (start, end, task) => {
    return '<b>任务内容:</b>' + task.text +
        '<br/><b>计划开始:</b> ' + task.planStart +
        '<br/><b>计划结束:</b> ' + task.planEnd +
        '<br/><b>实际开始:</b> ' + task.actualStart +
        '<br/><b>实际结束:</b> ' + task.actualEnd;
  };
  
  gantt.config.scale_unit = 'year';
  gantt.config.step = 1;
  gantt.config.date_scale = '%Y';
  // 当右侧不止显示年份时，可以添加展示月日，添加一个就加一行
  gantt.config.subscales = [
    {unit: 'month', step: 1, date: '%m'},
  ];
  // 甘特图右侧表头的高度
  gantt.config.scale_height = 80;
  // 使用中文
  gantt.i18n.setLocale('cn');
  // 自适应甘特图的尺寸大小, 使得在不出现滚动条的情况下, 显示全部任务
  gantt.config.autosize = true;
  // 只读模式
  gantt.config.readonly = true;
  // 是否显示左侧树表格
  gantt.config.show_grid = true;
  // 表格列设置
  gantt.config.columns = [
    {name: 'text', label: '任务内容', width: '120', align: 'center'},
    {name: 'planStart', label: '计划开始', width: '100', align: 'center'},
    {name: 'planEnd', label: '计划结束', width: '100', align: 'center'},
    {name: 'actualStart', label: '实际开始', width: '100', align: 'center'},
    {name: 'actualEnd', label: '实际结束', width: '100', align: 'center'},
  ];
  // 任务条上的文字大小 以及取消border自带样式
  gantt.templates.task_class = function () {
    return 'firstLevelTask';
  };
  console.log(ganttRef, '12341312');
  // 初始化
  gantt.init(ganttRef.value);
      // 数据解析
  gantt.parse(tasks);
};
const initData = () => {
  tasks.data = originData.map((ite) => {
    const obj = getDate(ite.planStart, ite.planEnd, ite.actualStart, ite.actualEnd);
    return {
      id: ite.id,
      text: ite.task,
      start_date: new Date(moment(obj.minTime).format('YYYY-MM-DD')),
      progress1: Math.abs(obj.progress1),
      progress2: Math.abs(obj.progress2),
      progress3: Math.abs(obj.progress3),
      duration: obj.duration,
      planStart: ite.planStart,
      planEnd: ite.planEnd,
      actualStart: ite.actualStart,
      actualEnd: ite.actualEnd,
      state: obj.state,
      colorType: obj.colorType
    };
  });
};
const percenToString = (num) => {
  return Math.floor(num * 100) + '%';
};
const renderLabel = (progress, type, state) => {
  let relWidth = progress * 100;
  let cssClass = 'custom_progress ';
  if (type === 1) {
    cssClass += 'nearly_done';
  } else if (type === 2) {
    if (state) {
      cssClass += 'in_progress';
    } else {
      cssClass += 'in_progress_w';
    }
  } else {
    cssClass += 'idle';
  }
  return (
    "<div class='" +
          cssClass +
          "' style='width:" +
          relWidth +
          "%'>" +
          percenToString(progress) +
          '</div>'
  );
};
const getDate = (Atime, Btime, Ctime, Dtime) => {
  let obj = {};
  let arr = [Atime, Btime, Ctime, Dtime];
  let timeArr = [];
  arr.forEach((item) => {
    timeArr.push(new Date(item));
  });
  let minTime = moment(Math.min(...timeArr)).format('MM-DD-YYYY');
  let maxTime = moment(Math.max(...timeArr)).format('YYYY-MM-DD');
  let duration = difference(minTime, maxTime);
  
  let progress1 = 0;
  let progress2 = 0;
  let progress3 = 0;
  let state = true;
  let colorType = true;
  
  if (Atime < Ctime && Ctime < Btime &&  Btime < Dtime) {
          // console.log('12相交', index)
    colorType = 'j12';
    progress2 = (difference(Ctime, Btime) / duration);
    progress1 = (difference(Atime, Ctime) / duration);
    progress3 = (difference(Btime, Dtime) / duration);
  } else if (Btime > Ctime && Btime >= Dtime && Ctime >= Atime && Dtime > Atime) {
          // console.log('1包含2', index)
    colorType = 'b12';
    state = true;
    progress2 = (difference(Ctime, Dtime) / duration);
    progress1 = (difference(Atime, Ctime) / duration);
    progress3 = (difference(Dtime, Btime) / duration);
  } else if (Dtime >= Btime && Dtime > Atime && Atime >= Ctime && Btime > Ctime) {
          // console.log('2包含1', index)
    colorType = 'b21';
    state = true;
    progress2 = (difference(Atime, Btime) / duration);
    progress1 = (difference(Ctime, Atime) / duration);
    progress3 = (difference(Btime, Dtime) / duration);
  } else if (Btime > Dtime && Dtime > Atime && Atime > Ctime) {
          // console.log('21相交', index)
    colorType = 'j21';
    state = true;
    progress2 = (difference(Atime, Dtime) / duration);
    progress1 = (difference(Ctime, Atime) / duration);
    progress3 = (difference(Dtime, Btime) / duration);
  } else if (Btime < Ctime) {
          // console.log('12相离')
    colorType = 'l12';
    state = false;
    progress2 = (difference(Btime, Ctime) / duration);
    progress1 = (difference(Atime, Btime) / duration);
    progress3 = (difference(Ctime, Dtime) / duration);
  } else if (Dtime < Atime) {
          // console.log('21相离')
    colorType = 'l21';
    state = false;
    progress2 = (difference(Dtime, Atime) / duration);
    progress3 = (difference(Atime, Btime) / duration);
    progress1 = (difference(Ctime, Dtime) / duration);
  } else {
    colorType = 'one';
    console.log('状态错误');
  }
  obj = {
    state,
    minTime,
    duration: duration * 1,
    progress1: progress1 * 1,
    progress2: progress2 * 1,
    progress3: progress3 * 1,
    colorType,
  };
  return obj;
};
const difference = (beginTime, Dtime) => {
  let dateBegin = new Date(beginTime);
  let dateEnd = new Date(Dtime);
  let dateDiff = dateEnd.getTime() - dateBegin.getTime(); // 时间差的毫秒数
  let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); // 计算出相差天数
  return dayDiff;
};

onMounted(() => {
  initData();
  ganttConfig();
});
</script>
  
  <style lang="scss" scoped>
  html,
  body {
    height: 100%;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
  }
  
  .legend {
    padding: 10px;
    display: flex;
  
    .legendBox {
      display: flex;
      align-ites: center;
      margin-right: 20px;
  
      .legendSml {
        width: 30px;
        height: 16px;
        border-radius: 5px;
        margin-right: 4px;
      }
  
      .legendColor1 {
        background: #01aff4;
      }
      .legendColor2 {
        background: #0169bd;
      }
      .legendColor3 {
        background: rgb(1, 105 , 189, 50%);
      }
    }
  }
  
  .gantt_task_content {
    display: flex;
  }
  
  .gantt_task_line {
    background: #fff;
  }
  
  .custom_progress {
    display: inline-block;
    vertical-align: top;
    text-align: center;
    height: 100%;
  }
  .nearly_done {
    background-color: #01aff4 !important;
  }
  
  .in_progress {
    background-color: #0169bd !important;
  }
  
  .in_progress_w {
    background-color: #FFF !important;
  }
  
  .idle {
    background-color: rgb(1, 105 , 189, 50%) !important;
  }
  .firstLevelTask {
    border: none;
  }
  
  .secondLevelTask {
    border: none;
  }
  
  .left-container {
    height: 600px;
  }
  </style>