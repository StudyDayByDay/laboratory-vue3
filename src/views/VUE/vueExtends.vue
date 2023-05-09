<template>
    <div>
        <a-button v-bind="{...$props}">Primary Button</a-button>
        <span>李鲲</span>
    </div>
</template>

<script>
import {Button} from 'ant-design-vue';
import {defineComponent} from 'vue';

export default defineComponent({
  extends: Button,
  // props: {
  //   type: Number
  // },
  setup(props) {
    console.log(123, props);
  }
});
</script>

<style lang="less" scoped>
</style>
