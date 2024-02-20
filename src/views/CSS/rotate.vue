<template>
  <div class="container">
    <div class="item" v-for="(item, ind) in imgs" :key="ind">
      <img :src="item" alt="" />
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import al from '@assets/images/al.jpg';
import ns from '@assets/images/ns.jpg';
import sn from '@assets/images/sn.jpg';
import ytks from '@assets/images/ytks.jpg';
import zy from '@assets/images/zy.jpg';
const imgs = ref([al, ns, sn, ytks, zy]);
/* 
在这个例子中最重要的就是：
    - grid的区域划分
    - grid区域命名
    - 动画复用
*/
</script>

<style lang="less" scoped>
.container {
  --d: 360deg;
  width: 600px;
  height: 600px;
  margin: 0 auto;
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    'A A B'
    'C D B'
    'C E E';
  gap: 10px;
  animation: rotation 8s infinite linear;
  .item {
    --d: -360deg;
    overflow: hidden;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      animation: rotation 10s infinite linear;
      width: 230%;
      height: 230%;
      object-fit: cover;
    }
    &:nth-child(1) {
      grid-area: A;
    }
    &:nth-child(2) {
      grid-area: B;
    }
    &:nth-child(3) {
      grid-area: C;
    }
    &:nth-child(4) {
      grid-area: D;
    }
    &:nth-child(5) {
      grid-area: E;
    }
  }
}

@keyframes rotation {
  to {
    transform: rotate(var(--d));
  }
}
</style>
