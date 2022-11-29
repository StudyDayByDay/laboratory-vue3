laer<template>
    <div>
        <h1><a href="https://sortablejs.github.io/vue.draggable.next/#/simple" target="_blank">v-draggable示例</a></h1>
        
        <div class="drag">
          <draggable v-model="listOne" v-bind="dragProps" @start="start" @end="end">
              <template #item="{element}">
                  <div class="list-group-item">{{element.name}}</div>
              </template>
          </draggable>
          <draggable v-model="listTwo" v-bind="dragProps" @start="start" @end="end">
              <template #item="{element}">
                  <div class="list-group-item">{{element.name}}</div>
              </template>
          </draggable>
        </div>
    </div>
</template>

<script setup>
import draggable from 'vuedraggable';
import {reactive, ref} from 'vue';

// list要用ref
const listOne = ref([
  {id: 1, name: '赵', sex: 1},
  {id: 2, name: '钱', sex: 0},
  {id: 3, name: '孙', sex: 1},
  {id: 4, name: '李', sex: 1},
  {id: 5, name: '周', sex: 0},
  {id: 6, name: '吴', sex: 1},
  {id: 7, name: '郑', sex: 1},
  {id: 8, name: '王', sex: 0},
]);

const listTwo = ref([
  {id: 9, name: 'A', sex: 1},
  {id: 10, name: 'B', sex: 0},
  {id: 11, name: 'C', sex: 1},
  {id: 12, name: 'D', sex: 1},
  {id: 13, name: 'E', sex: 0},
  {id: 14, name: 'F', sex: 1},
  {id: 15, name: 'G', sex: 1},
  {id: 16, name: 'H', sex: 0},
]);

// 这些属性要用reactive
const dragProps = reactive({
  class: 'list-group',
  animation: 200,
  group: 'description',
  disabled: false,
  ghostClass: 'ghost',
  itemKey: 'id',
  tag: 'div',
  forceFallback: true,
  componentData: {
    // tag: 'ul',
    type: 'transition-group',
    name: 'fade'
  }
});

const drag = ref(false);

const start = (e) => {
  console.log(e, 'start');
};

const end = (e) => {
  console.log(e, 'end');
};
</script>

<style lang="less" scoped>
.drag {
  display: flex;
  gap: 20px;
}
.list-group {
  width: 200px;
  min-height: 20px;
  &-item {
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #47cfc6;
    cursor: all-scroll;
  }
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>