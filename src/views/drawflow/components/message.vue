<template>
  <div class="msg">
    <span style="font-size: 18px; font-weight: 500;">message</span>
    <span>{{ msg }}</span>
    <div>{{ gender }}</div>
    <el-input v-model="input" style="width: 240px" placeholder="Please input" />
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: '',
    },
    gender: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      input: ''
    }
  },
  mounted() {
    this.input = this.msg;
  },
};

</script>

<style lang="less" scoped>
.msg {
  display: flex;
  justify-content: center;
  padding: 10px;

  flex-direction: column;
  width: 190px;

  .ipt {
    border: 0px;
    text-align: center;
  }
}
</style>
