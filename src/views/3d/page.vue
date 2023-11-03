<template>
  <div class="container" @touchstart="tdown" @touchmove="tmove" @touchend="tend">
    <img class="bg" src="https://cdn.sinacloud.net/act-img/202311021950056jlSWAIr" :style="`transform: translate(${x * 0.2}px, 0px) scale(1.4);`" />
    <div class="content" @click="test">8888</div>
    <img class="fg" src="https://cdn.sinacloud.net/act-img/20231102195721Pgcifw6Z" :style="`transform: translate(${-x * 0.2}px, 0px) scale(1.4);`" />
  </div>
</template>

<script setup>
const offset = ref(0);
const start = ref(0);
const x = ref(0);

const test = () => {
  alert(7777);
};
const tdown = e => {
  start.value = e.touches[0].clientX;
};
const tmove = e => {
  offset.value = e.touches[0].clientX;
  if (!offset.value || !start.value) {
    x.value = 0;
  } else {
    x.value = offset.value - start.value;
  }
};

const tend = e => {
  let flag = 1;
  if (x.value < 0) {
    flag = -1;
  }
  let timer = setInterval(() => {
    if (x.value * flag < 0) {
      x.value = 0;
      clearInterval(timer);
    } else {
      x.value = x.value - flag * 2;
    }
  }, 10);
};
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  .content {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    font-weight: bold;
    color: #fff;
  }
  .bg {
    position: absolute;
    width: 100%;
    transform: translate(0, 0) scale(1.1);
  }
  .fg {
    position: absolute;
    width: 100%;
    pointer-events: none; /* 穿透遮罩 */
  }
}
</style>
