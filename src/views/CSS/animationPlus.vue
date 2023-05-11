<template>
  <div class="star">
    <div class="dot" v-for="item in nums" :key="item" :style="`--delay: ${Math.random() * 10}s; --color: hsl(${360 * Math.random()}, 50%, 50%);`"></div>
  </div>
</template>

<script setup>
import {computed} from 'vue';

const nums = computed(() => {
  return Math.floor(window.innerWidth / 10);
});
</script>

<style scoped>
.star {
  display: flex;
  justify-content: space-between;
  /* align-items: flex-en; */
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #000;
}

.star .dot {
  transform: translateY(-5px);
  width: 5px;
  height: 5px;
  background-color: var(--color);
  border-radius: 50%;
  position: relative;
  animation: rain cubic-bezier(0, 0.75, 1, -0.07) 5s infinite;
  animation-delay: var(--delay);
}

.star .dot::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100px;
  top: -95px;
  background: linear-gradient(to top, var(--color), rgba(0, 0, 0, 0.1));
}

@keyframes rain {
  to {
    transform: translateY(100vh);
  }
}
</style>
