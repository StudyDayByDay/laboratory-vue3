<template>
  <div class="container">
    <div class="grid">
      <div class="grid_item"></div>
      <div class="grid_item"></div>
      <div class="grid_item"></div>
      <div class="grid_item"></div>
      <div class="grid_item"></div>
      <div class="grid_item"></div>
      <div class="grid_item"></div>
      <div class="grid_item"></div>
      <div class="grid_item"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .grid {
    width: 400px;
    height: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 10px;
    transition: 0.3s;
    &_item {
      background-color: pink;
    }
  }
}

.grid:has(.grid_item:nth-child(1):hover) {
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 2fr 1fr 1fr;
}
.grid:has(.grid_item:nth-child(2):hover) {
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 2fr 1fr 1fr;
}
.grid:has(.grid_item:nth-child(3):hover) {
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 2fr 1fr 1fr;
}
.grid:has(.grid_item:nth-child(4):hover) {
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
}
.grid:has(.grid_item:nth-child(5):hover) {
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
}

.grid:has(.grid_item:nth-child(6):hover) {
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 1fr 2fr 1fr;
}
.grid:has(.grid_item:nth-child(7):hover) {
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 2fr;
}
.grid:has(.grid_item:nth-child(8):hover) {
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 2fr;
}
.grid:has(.grid_item:nth-child(9):hover) {
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 1fr 1fr 2fr;
}
</style>
