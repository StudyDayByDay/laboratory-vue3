<template>
  <div>
    <h1>单文件上传</h1>
    <input type="file" @change="uploadFile" />
    <img :src="imgUrl" width="300" height="300" alt="图片" />

    <h1>多文件上传</h1>
    <input type="file" multiple @change="uploadFileMultiple" />
    <img v-for="item in base64Arr" :key="item" :src="item" width="100" height="100" alt="图片" />
    <button @click="submit">上传</button>

    <h1>大文件切片</h1>
    <input type="file" @change="bigFileSlice" />
    <img :src="partUrl" width="300" height="300" alt="图片" />
  </div>
</template>

<script setup>
import {reactive, ref} from 'vue';

const imgUrl = ref('');
const imgArr = reactive([]);
const base64Arr = reactive([]);
const partUrl = ref('');

// ***单文件上传***
const uploadFile = ({
  target,
  target: {
    files: [file],
  },
}) => {
  console.log(file);
  // 限制大小
  if (file.size > 5000000) {
    alert('文件大于5MB');
    // 大于这个值就清空选择的内容
    target.value = '';
    return;
  }
  // 限制文件类型
  if (file.name.split('.')[1] !== 'jpg') {
    alert('文件类型必须是png');
    target.value = '';
    return;
  }

  //   //  方式一：使用FormData
  //   //  1、新建formData对象
  //   let formD = new FormData();
  //   //  2、将数据传入到对象中
  //   formD.append('file', file);
  //   //  3、上传到接口去

  //  方式二：使用base64
  let fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = () => {
    console.log(fileReader.result);
    imgUrl.value = fileReader.result;
  };
};

// ***多文件上传***
const uploadFileMultiple = ({target: {files}}) => {
  imgArr.length = 0;
  base64Arr.length = 0;
  console.log(files, '多文件');
  for (const item of files) {
    imgArr.push(item);
    const fr = new FileReader();
    fr.readAsDataURL(item);
    fr.onload = () => {
      base64Arr.push(fr.result);
    };
  }
};

const submit = () => {
  const fd = new FormData();
  imgArr.forEach((file) => {
    fd.append(file.name, file);
  });
  // 上传到接口去
};

// ***大文件切片***
const bigFileSlice = ({
  target: {
    files: [file],
  },
}) => {
  console.log(file);
  // file对象是blob对象的子类
  // let _sli = file.slice(0, 100000);
  // console.log(_sli);
  // 可以还原成file对象
  // new File([_sli]);
  // 预览效果
  // const fr = new FileReader();
  // fr.readAsDataURL(_sli);
  // fr.onload = () => {
  //   partUrl.value = fr.result;
  // };

  const fileSize = file.size;
  // 当前切片的开始点
  let current = parseInt(localStorage.getItem(file.name)) || 0;
  // 每次切片的大小
  let size = 2 * 1024 * 1024;

  while (current < fileSize) {
    // 处理数据
    let _sli = file.slice(current, current + size);
    const fr = new FormData();
    fr.append(file.name, _sli);
    fr.append('partIndex', current);

    // 发送出去，成功之后，回调函数中current增加
    current += size;
    // 存入localStorag便于断点续传
    localStorage.setItem(file.name, current);
  }
};
</script>

<style lang="scss" scoped></style>
