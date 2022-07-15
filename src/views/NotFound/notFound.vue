<template>
  <div class="notFound">
    <a-result status="404" title="404" sub-title="您访问的页面不存在">
      <template #extra>
        <a-button type="primary" @click="backHome">Back Home</a-button>
      </template>
    </a-result>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();
const backHome = () => {
  router.push({
    name: 'main',
  });
};
</script>

<style lang="less" scoped>
  .notFound {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>