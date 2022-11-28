<template>
    <div>
        <h1>v-draggable</h1>
        <draggable v-model="lists" group="student" tag="transition-group" @start="start" @end="end" item-key="id">
            <template #header>
                <button>Add1</button>
            </template>
            <template #item="{element}">
                <div>{{element.name}}</div>
            </template>
            <template #footer>
                <button>Add2</button>
            </template>
        </draggable>
        
    </div>
</template>

<script setup>
import draggable from 'vuedraggable';
import {reactive} from 'vue';

const lists = reactive([
  {id: 0, name: '赵', sex: 1},
  {id: 1, name: '钱', sex: 0},
  {id: 2, name: '孙', sex: 1},
  {id: 3, name: '李', sex: 1},
  {id: 4, name: '周', sex: 0},
  {id: 5, name: '吴', sex: 1},
  {id: 6, name: '郑', sex: 1},
  {id: 7, name: '王', sex: 0},
]);

const start = (e) => {
  console.log(e, 'e');
};

const end = (e) => {
  console.log(e, 'e');
};
</script>

<style>

</style>