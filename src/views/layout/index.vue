<template>
  <div class="layout">
      <div class="layout-header">layout头部</div>
      <div class="layout-content">
          <router-view></router-view>
      </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.layout {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 28px auto;
    row-gap: 10px;
}

.layout .layout-header {
    background-color: pink;
}

.layout .layout-content {
    background-color: #9e3b3b;
}
</style>