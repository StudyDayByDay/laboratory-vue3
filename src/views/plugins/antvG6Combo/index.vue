<template>
  <div class="container">
    <div class="g6" id="g6" ref="g6"></div>
  </div>
</template>

<script setup>
import g6Config, {graphData} from './config';
import {ref, onMounted} from 'vue';

const g6 = ref(null);
onMounted(() => {
  const graph = g6Config('g6', g6.value);
  graph.data(graphData);
  graph.render();
});
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #777373;
  .g6 {
    width: 100%;
    height: 420px;
    background: url('@/assets/images/cardBackground.png') center / cover;
  }
}
</style>
