<template>
  <div>
    <span>z轴旋转的角度alpha： {{ alpha }}</span>
  </div>
  <div>
    <span>x轴旋转的角度beta： {{ beta }}</span>
  </div>
  <div>
    <span>y轴旋转的角度gamma： {{ gamma }}</span>
  </div>
  <div>{{ status }}</div>
</template>

<script setup>
const alpha = ref(0);
const beta = ref(0);
const gamma = ref(0);
const status = ref("");

onMounted(() => {
  if (window.DeviceOrientationEvent) {
    console.log(789);
    window.addEventListener("deviceorientation", event => {
      console.log(7890, event);
      alpha.value = event.alpha;
      beta.value = event.beta;
      gamma.value = event.gamma;
    });
  } else {
    status.value = "你的浏览器不支持陀螺仪";
  }
});
</script>

<style lang="scss" scoped></style>
