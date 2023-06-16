<template>
  <div>
    <input type="file" @change="fileChange" />
    <img :src="src" alt="" />
  </div>
</template>

<script setup>
import {ref} from 'vue';

const src = ref('');
const fileChange = ({target: {files}}) => {
  console.log(files);
  const fr = new FileReader();
  fr.readAsDataURL(files[0]);
  fr.onload = () => {
    src.value = fr.result;
  };
};
</script>

<style lang="less" scoped>
img {
  width: 300px;
  height: 300px;
}
</style>
