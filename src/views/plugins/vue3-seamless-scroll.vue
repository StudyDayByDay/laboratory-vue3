<template>
    <div>
        <h1><a href="https://github.com/xfy520/vue3-seamless-scroll#readme" target="_blank">vue3-seamless-scroll</a></h1>
        <vue3-seamless-scroll :list="list" class="scroll">
            <div class="item" v-for="(item, index) in list" :key="index">
                <span>{{item.title}}</span>
                <span>{{item.date}}</span>
            </div>
        </vue3-seamless-scroll>
        <h1><a href="https://github.com/chenxuan0000/seamless-scroll" target="_blank">js滚动</a></h1>
        <div class="demo3">
            <ul class="list2 clearfix" ref="demo2">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>
        </div>
        <h1>自己实现的滚动，还未实现</h1>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {Vue3SeamlessScroll} from 'vue3-seamless-scroll';
import {init} from 'seamscroll/src';

const list = ref([
  {
    title: 'Vue3.0 无缝滚动组件展示数据第1条',
    date: Date.now(),
  },
  {
    title: 'Vue3.0 无缝滚动组件展示数据第2条',
    date: Date.now(),
  },
  {
    title: 'Vue3.0 无缝滚动组件展示数据第3条',
    date: Date.now(),
  },
  {
    title: 'Vue3.0 无缝滚动组件展示数据第4条',
    date: Date.now(),
  },
  {
    title: 'Vue3.0 无缝滚动组件展示数据第5条',
    date: Date.now(),
  },
  {
    title: 'Vue3.0 无缝滚动组件展示数据第6条',
    date: Date.now(),
  },
  {
    title: 'Vue3.0 无缝滚动组件展示数据第7条',
    date: Date.now(),
  },
  {
    title: 'Vue3.0 无缝滚动组件展示数据第8条',
    date: Date.now(),
  },
  {
    title: 'Vue3.0 无缝滚动组件展示数据第9条',
    date: Date.now(),
  },
]);

const demo2 = ref(null);

onMounted(() => {
  init({
    dom: demo2.value,
    direction: 2
  });
});
</script>

<style lang="less">
.scroll {
  height: 270px;
  width: 500px;
  margin: 100px auto;
  overflow: hidden;
}

.scroll .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 0;
}

.demo3 {
    width: 600px;
    height: 100px;
    position: relative;
    overflow: hidden;
    margin-top: 100px;
    background-color: pink;
}
.list2 li {
    float: left;
    width: 100px;
    height: 100px;
    margin-right: 20px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    line-height:100px;
    background-color: #ccc;
}
</style>