<template>
  <div class="gallery">
    <div class="gallery-item" v-for="item in imgs" :key="item" :style="{backgroundImage: `url(${item})`}"></div>
    <!-- <div class="gallery-item" style="background-image: url('src/assets/images/ns.jpg')"></div>
    <div class="gallery-item" style="background-image: url('src/assets/images/al.jpg')"></div>
    <div class="gallery-item" style="background-image: url('src/assets/images/sn.jpg')"></div>
    <div class="gallery-item" style="background-image: url('src/assets/images/ytks.jpg')"></div>
    <div class="gallery-item" style="background-image: url('src/assets/images/zy.jpg')"></div> -->
  </div>
</template>

<script setup>
import {ref} from 'vue';
const imgs = ref(['src/assets/images/al.jpg', 'src/assets/images/ns.jpg', 'src/assets/images/sn.jpg', 'src/assets/images/ytks.jpg', 'src/assets/images/zy.jpg']);
</script>

<style lang="less" scoped>
.gallery {
  display: flex;
  height: 20rem;
  gap: 1rem;
  &-item {
    flex: 1;
    border-radius: 1rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    transition: all 0.8s cubic-bezier(0.25, 0.4, 0.45, 1.4);
    &:hover {
      flex: 2.5;
      border-radius: 1rem;
    }
  }
}
</style>
