<template>
  <div class="container">
    <div class="g6" id="g6"></div>
  </div>
</template>

<script setup>
import G6 from '@antv/g6';
import {onMounted} from 'vue';
const initData = {
  // 点集
  nodes: [
    {
      id: 'node1', // 节点的唯一标识
      label: '1', // 节点文本
    },
    {id: 'node2', label: '2'},
    {id: 'node3', label: '3'},
    {id: 'node4', label: '4'},
    {id: 'node5', label: '5'},
    {id: 'node6', label: '6'},
    {id: 'node7', label: '7'},
  ],
  // 边集
  edges: [
    {
      source: 'node1', // 起始点 id
      target: 'node2', // 目标点 id
    },
    {source: 'node2', target: 'node3'},
    {source: 'node1', target: 'node4'},
    {source: 'node4', target: 'node5'},
    {source: 'node1', target: 'node6'},
    {source: 'node6', target: 'node7'},
  ],
};

onMounted(() => {
  const graph = new G6.Graph({
    container: 'g6', // 指定挂载容器
    width: 500, // 图的宽度
    height: 500, // 图的高度
    layout: {
      type: 'dagre',
      // 布局方向
      rankdir: 'LR',
      // 节点对齐方式
      align: 'DL',
      // 是否保留布局连线的控制点
      controlPoints: true,
      // nodesep 竖直间距
      nodesepFunc: () => 20,
      // ranksep 水平方向层间距
      ranksepFunc: () => 34,
    },
  });
  graph.data(initData); // 加载数据
  graph.render(); // 渲染
});
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .g6 {
    width: 500px;
    height: 500px;
    background-color: pink;
  }
}
</style>
