<template>
    <div class="plan-table">
        <div class="plan-table-item" v-for="item in formData" :key="item.id">
            <div :class="['icon', 'iconfont', item.icon]"></div>
            <div class="from">
                <div class="from-item">
                    <span>计划开始时间：<a-date-picker v-model:value="item.planStart" :allowClear="false"/></span>
                    <span>计划结束时间：<a-date-picker v-model:value="item.planEnd" :allowClear="false"/></span>
                    <span>负责人【<span style="color: red;">{{item.chargeMan}}</span>】</span>
                </div>
                <div class="from-item">
                    <span>实际开始时间：<a-date-picker v-model:value="item.actualStart" :allowClear="false"/></span>
                    <span>实际结束时间：<a-date-picker v-model:value="item.actualEnd" :allowClear="false"/></span>
                    <a-select ref="select" v-model:value="item.role" placeholder="请选择" style="width: 120px">
                        <a-select-option value="admin">管理员</a-select-option>
                    </a-select>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {reactive} from 'vue';

// eslint-disable-next-line vue/no-setup-props-destructure
const {formData} = defineProps(['formData']);
</script>

<style lang="less" scoped>
.plan-table {
    width: 100%;
    height: 100%;
    &-item {
        display: flex;
        gap: 10px;
        padding: 5px 0;
        border-bottom: 1px solid #dedede;
        .icon {
            font-size: 35px;
            line-height: 79px;
        }
        .from {
            display: flex;
            flex-direction: column;
            gap: 15px;
            &-item {
                display: flex;
                gap: 10px;

            }
        }
    }
}
</style>
