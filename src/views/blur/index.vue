<!--
 * @Author: haolian
 * @Date: 2024-05-08 12:36:25
 * @LastEditors: haolian
 * @LastEditTime: 2024-05-08 12:47:17
 * @Description: Do not edit
 * @FilePath: /mvp-demo/src/views/blur/index.vue
-->
<template>
  <el-tabs
    v-model="activeName"
    type="card"
    class="demo-tabs"
  >
    <el-tab-pane label="pic" name="pic">
      <pic />
    </el-tab-pane>
    <el-tab-pane label="iphone" name="iphone">
      <iphone />
    </el-tab-pane>
    <el-tab-pane label="ipad" name="ipad">
      <ipad />
    </el-tab-pane>
    <el-tab-pane label="mac" name="mac">
      <mac />
    </el-tab-pane>
    <el-tab-pane label="imac" name="imac">
      <imac />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import iphone from './iphone.vue';
import imac from './imac.vue';
import mac from './mac.vue';
import ipad from './ipad.vue';
import pic from './pic.vue';
import { ref } from 'vue';

const activeName = ref('pic')

</script>

<style lang="less" scoped>
</style>