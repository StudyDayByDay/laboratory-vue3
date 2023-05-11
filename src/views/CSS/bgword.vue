<template>
    <div class="bg">
        <div class="modal">
            <h1>李鲲</h1>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.bg {
    width: 100%;
    height: 100%;
    background: url('@assets/images/bear.jpg') no-repeat center/cover;
}
/* 蒙层作用 */
.modal {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
}
h1 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12vw;
    text-stroke: 1px #fff;
    /* 白色描边 */
    -webkit-text-stroke: 1px #fff;
    background: url('@assets/images/bear.jpg') no-repeat center/cover;
    /* 背景限制到文字区域 */
    -webkit-background-clip: text;
    color: transparent;
}
</style>
