<template>
  <div>
    <p>{{ str }}</p>
  </div>
</template>

<script setup>
// const test = () => {
//   const arr = [2, , , 121, , 2323, , 12];
//   isSparseArray(arr);
// };
const str = `
const isSparseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    // in操作符在数组中使用是看数组中是否有这个索引值，数组的索引值是0,1,2,3。。。；
    // in操作符是判断后面是否有这个索引值
    if (!(i in arr)) {
      return true;
    }
  }
  return false;
};`;

const isSparseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    // in操作符在数组中使用是看数组中是否有这个索引值，数组的索引值是0,1,2,3。。。；
    // in操作符是判断后面是否有这个索引值
    if (!(i in arr)) {
      return true;
    }
  }
  return false;
};
</script>

<style lang="less" scoped></style>
