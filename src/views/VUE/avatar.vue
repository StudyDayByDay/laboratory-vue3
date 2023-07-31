<template>
  <div>
    <h1>头像插件</h1>
    <div class="avatar" @click="avatarClick">
      <div class="avatar-inner">
        <img class="img-class" :src="fileSrc" alt="头像" />
        <div class="mask">
          <div class="svg"></div>
        </div>
      </div>
    </div>
    <input ref="input" v-show="false" type="file" accept="image/png,image/jpg,image/jpeg" @change="fileChange" />
  </div>
</template>

<script setup>
import {ref} from 'vue';

const fileSrc = ref('https://imgse.com/i/pP9ahnO');
const input = ref();

const avatarClick = () => {
  input.value.click();
};

const fileChange = ({
  target: {
    files: [image],
  },
}) => {
  console.log(image);
  const fr = new FileReader();
  fr.readAsDataURL(image);
  fr.onload = () => {
    // 这里要发出一个事件，把新选的图片传给事件里
    fileSrc.value = fr.result;
  };
};
</script>

<style lang="less" scoped>
.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  &-inner {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    .img-class {
      width: 100%;
      height: 100%;
      background-size: cover;
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      opacity: 0;
      &:hover {
        opacity: 1;
      }
      .svg {
        width: 15px;
        height: 15px;
        background-image: url(edit.svg);
      }
    }
  }
}
</style>
