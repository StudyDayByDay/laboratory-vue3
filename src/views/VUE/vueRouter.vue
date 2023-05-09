<template>
  <div>
    <h1>VUE：extends</h1>
    <vue-extends type="primary" danger></vue-extends>
    <h1>VUE：attrs</h1>
    <vue-event @click="handleClick"></vue-event>
    <h1>VUE：defineComponent</h1>
    <vue-define name="憨八龟" :age="12" @sayHi="sayHi"></vue-define>
  </div>
</template>

<script setup>
import vueExtends from './vueExtends.vue';
import vueEvent from './vueEvent.vue';
import vueDefine from './vueDefine.vue';
const handleClick = () => {
  console.log('父组件中的attrs传来的方法');
};

const sayHi = () => {
  // confirm('父组件传过来的方法被调用');
  // new Notification('12121');
  if (Notification.permission === 'granted') {
    new Notification('hahaha');
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        new Notification('嘿嘿');
      }
    });
  }
};
</script>

<style>

</style>