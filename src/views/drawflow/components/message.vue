<template>
  <div class="msg">
    <h2>message</h2>
    <input class="ipt" disabled df-msg />
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.msg {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80px;
  .ipt {
    border: 0px;
    text-align: center;
  }
}
</style>
