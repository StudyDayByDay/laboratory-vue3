<template>
  <div class="site-container" ref="container">
    <!-- 左边的卡片 -->
    <div :class="['site-card', scaling ? 'open' : 'close']">
      <div class="site-card-top">
        <div class="site-card-top-text">
          <span class="iconfont-scqy icon-wulizhanzhi icon"></span>
          <span class="text">{{ siteData.siteName || '--' }}</span>
        </div>
        <div class="site-card-top-box">
          <div class="site-card-top-box-item">
            <span class="text">经度</span>
            <span class="num">{{ siteData.siteLon || '--' }}</span>
          </div>
          <div class="site-card-top-box-item">
            <span class="text">维度</span>
            <span class="num">{{ siteData.siteLat || '--' }}</span>
          </div>
          <div class="site-card-top-box-item">
            <span class="text">物理站点编号</span>
            <span class="num">{{ siteData.siteCode || '--' }}</span>
          </div>
        </div>
      </div>
      <div class="site-card-center">
        <a-button type="primary" size="small" ghost style="height: 28px">物理健康档案</a-button>
        <span>e:电子下倾角 m:机械下倾角 a:方向角 h:天线高度(m)</span>
      </div>
      <div class="site-card-content" id="card-content" ref="g6"></div>
      <div class="site-card-button" @click="scalingClick">
        <span :class="['arrow', scaling ? 'arrow-close' : 'arrow-open']">
          <LeftOutlined v-show="scaling" />
          <RightOutlined v-show="!scaling" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive, onMounted} from 'vue';
import {RightOutlined, LeftOutlined} from '@ant-design/icons-vue';
import g6Config, {imitateData} from './g6-config.js';

// g6 ref
const g6 = ref(null);
// 控制面板显隐
const scaling = ref(true);
// 面板数据
const siteData = reactive({
  siteName: 'xx',
  siteLon: '104.846205',
  siteLat: '29.307385',
  siteCode: 'xxxxxxxx',
});

const scalingClick = () => {
  scaling.value = !scaling.value;
};

// 图中的渲染的tool-tip点击事件
const innerClick = (name, key) => {
  console.log(name, key);
};

const drawG6 = (data) => {
  const graph = g6Config('card-content', g6.value, innerClick);
  // graph.fitView();
  graph.data(data);
  graph.render();
};

onMounted(() => {
  drawG6(imitateData);
});
</script>

<style lang="less" scoped>
.site-container {
  z-index: 1;
  width: 100%;
  height: 100%;
  // background-color: white;
  position: relative;
  background-color: #ccc;
  .site-card {
    position: absolute;
    width: 540px;
    display: grid;
    grid-template-rows: 100px 28px auto;
    grid-template-columns: 100%;
    row-gap: 20px;
    top: 20px;
    // left: 20px;
    height: calc(100% - 40px);
    background-color: #fff;
    transition: left 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    // opacity: .8;
    &-top {
      display: flex;
      flex-direction: column;
      // background-color: pink;
      background: url('~@/assets/images/cutFigure/cardBackground.png') center / contain, linear-gradient(90deg, #397bff 0%, #3b7fff 100%);
      padding: 10px 20px 10px;
      &-text {
        font-size: 16px;
        color: #fff;
        .icon {
          margin-right: 10px;
          font-size: 22px;
        }
        .text {
          font-weight: bold;
        }
      }
      &-box {
        display: flex;
        flex: 1;
        justify-content: space-evenly;
        &-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 120px;
          height: 100%;
          background-color: #ffffff14;
          border-radius: 4px;
          border: solid 1px #ffffff14;
          // opacity: 0.2;
          &:nth-last-child(1) {
            width: 140px;
          }
          .text {
            font-size: 12px;
            color: #ffffffbf;
          }
          .num {
            color: #fff;
          }
        }
      }
    }
    &-center {
      display: flex;
      justify-content: space-between;
      // background-color: #338bff;
      padding: 0 20px;
      color: #8f9db2;
    }
    &-content {
      // background-color: aqua;
      :deep(.g6-component-tooltip) {
        padding: 0 0;
        overflow: hidden;
        .rru-container {
          width: 100px;
          background-color: #000;
          opacity: 0.8;
          .rru-item {
            width: 100px;
            height: 24px;
            text-align: center;
            line-height: 24px;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            user-select: none;
            &:hover {
              background-color: #338bff6b;
            }
            &:active {
              background-color: #338bff;
            }
          }
        }
      }
    }
    &-button {
      position: absolute;
      right: -20px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 80px;
      background-color: #fff;
      border-radius: 0px 20px 20px 0px;
      opacity: 0.8;
      text-align: center;
      line-height: 80px;
      color: #338bff;
      cursor: pointer;
      .arrow {
        transition: all 0.5s cubic-bezier(0.85, 0, 0.15, 1);
        &-open {
          transform: rotateZ(0deg);
        }
        &-close {
          transform: rotateZ(180deg);
        }
      }
    }
    // overflow: auto;
  }
  .open {
    left: 20px;
  }
  .close {
    left: -540px;
  }
}
</style>
