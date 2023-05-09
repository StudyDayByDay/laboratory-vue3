<template>
    <div>事件透传</div>
</template>

<script setup>
import {useAttrs} from 'vue';

const attrs = useAttrs();
console.log(attrs, 'attrs');

if (attrs.onClick) {
  attrs.onClick();
}

/*  
总结：
没有定义为props和emits的都会在这个attrs里面
*/
</script>

<style lang="less" scoped>
</style>
