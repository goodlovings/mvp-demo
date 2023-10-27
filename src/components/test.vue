<template>
  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <van-switch v-model="checked" df="checked" />
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
  // props: {
  //   checked: {
  //     type: Boolean,
  //     default: true,
  //   },
  // },
  // mounted() {
  //   this.checke = this.checked;
  // },
};
</script>
<style lang="scss" scoped></style>
