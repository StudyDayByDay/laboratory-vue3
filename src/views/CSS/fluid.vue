<template>
    <div class="fluid">
        <form class="show">
            <input type="text" class="name">
            <input type="text" class="email">
            <button>提交</button>
        </form>
    </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.fluid {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .show {
        width: 300px;
        height: 100px;
        padding: 20px;
        background-color: pink;
        resize: both;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        .name {
            flex: 1 0 130px;
        }
        .email {
            flex: 1 0 130px;
        }
        button {
            flex: 1 0 40px;
        }
    }
}
</style>
