<script>
import {h, ref} from 'vue';
export default {
  setup() {
    const count = ref('lk');
    const foo = ref('foo');
    const bar = ref(false);
    // h('div', count.value);
    // return () => h('div', {id: 'foo'});
    // return () => h('div', {class: 'bar', innerHTML: 'hello'});
    // return () => h('div', {class: [foo, {bar: bar}], style: {color: 'white'}, innerHTML: 'lllll', onClick: () => {console.log(111111);}});
    // return () => h('div', {id: 'foo'}, 'foo');
    // return () => h('div', 'kkkk');
    // return () => h('div', [h('span', 'span')]);
    return () => h('div', ['jjk', h('span', 'span')]);
  }
};
</script>

<style lang="less" scoped>
.bar {
    height: 20px;
    background-color: pink;
}

.foo {
    width: 300px;
}
</style>
