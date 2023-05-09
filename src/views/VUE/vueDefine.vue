<template>
    <div>我的名字是{{ name }}，我今年{{age}}岁了。</div>
    <div @click="sayName">打招呼</div>
</template>

<script>
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'lk-component',
  props: {
    name: String,
    age: Number
  },
  emits: ['sayHi'],
  setup(props, {emit}) {
    const better = ref(1);
    const sayName = () => {
      emit('sayHi', 'hi');
    };
    return {
      better,
      sayName
    };
  }
});
</script>

<style lang="less" scoped>
</style>
