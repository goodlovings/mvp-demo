<template>
  <div class="animated-banner" @mousemove="move" @mouseenter="down" @touchstart="tdown" @touchmove="tmove">
    <div class="layer">
      <img
        src="https://i0.hdslb.com/bfs/vc/0876da4f3ec73ff180fc87b46b6d1bcf4d52030a.png@1c.webp"
        data-height="281"
        data-width="3000"
        height="196"
        width="2100"
        :style="`height: 196.7px; width: 2100px; transform: translate(${x * 0.1}px, 0px) rotate(0deg) scale(1); opacity: 1`"
      />
    </div>
    <div class="layer">
      <img
        src="https://i0.hdslb.com/bfs/vc/4adc24834b64143296d77bc81ccd952a59301b08.png@1c.webp"
        data-height="281"
        data-width="2444"
        height="196"
        width="1710"
        :style="`height: 196.7px; width: 1710.8px; transform: translate(${x * 0.15}px, 0px) rotate(0deg) scale(1); opacity: 1`"
      />
    </div>
    <div class="layer">
      <img
        src="https://i0.hdslb.com/bfs/vc/e33992d2d75647af38c50792c199fb9db006786c.png@1c.webp"
        data-height="281"
        data-width="3000"
        height="196"
        width="2100"
        :style="`height: 196.7px; width: 2100px; transform: translate(${21 + x * 0.2}px, 0px) rotate(0deg) scale(1); opacity: 1`"
      />
    </div>
    <div class="layer">
      <img
        src="https://i0.hdslb.com/bfs/vc/57102cf6e2e2845f2773581928c1d0f0c1985a3e.png@1c.webp"
        data-height="281"
        data-width="2749"
        height="168"
        width="1649"
        :style="`height: 168.6px; width: 1649.4px; transform: translate(${-30 + x * 0.22}px, 0px) rotate(0deg) scale(1); opacity: 1`"
      />
    </div>
    <div class="layer">
      <img
        src="https://i0.hdslb.com/bfs/vc/0f79aa287163a3271c6cb22a73a6dc0fc210ab7c.png@1c.webp"
        data-height="135"
        data-width="150"
        height="81"
        width="90"
        :style="`height: 81px; width: 90px; transform: translate(${360 + x * 0.25}px, 0px) rotate(0deg) scale(1); opacity: 1`"
      />
    </div>
    <div class="layer">
      <img
        src="https://i0.hdslb.com/bfs/vc/639de634f90688e86b7bd32924cfb029a316cde4.png@1c.webp"
        data-height="48"
        data-width="140"
        height="28"
        width="84"
        :style="`height: 28.8px; width: 84px; transform: translate(${-240 + x * 0.5}px, -36px) rotate(0deg) scale(1); opacity: 1`"
      />
    </div>
    <div class="layer">
      <img
        src="https://i0.hdslb.com/bfs/vc/852c3bd9d9608ceccb7265de8cea7cf3a4b039eb.png@1c.webp"
        data-height="281"
        data-width="777"
        height="196"
        width="543"
        :style="`height: 196.7px; width: 543.9px; transform: translate(${140 + x * 0.2}px, 0px) rotate(0deg) scale(1); opacity: 1`"
      />
    </div>
    <div class="layer">
      <img
        src="https://i0.hdslb.com/bfs/vc/9556f65510f73c44aa6756ee9b8cf7fc2562b906.png@1c.webp"
        data-height="281"
        data-width="324"
        height="196"
        width="226"
        :style="`height: 196.7px; width: 226.8px; transform: translate(${x * 0.3}px, 0px) rotate(0deg) scale(1); opacity: 1`"
      />
    </div>
    <div class="layer">
      <img
        src="https://i0.hdslb.com/bfs/vc/530a4624fe408881101885c6f24c72e8c2a14fb6.png@1c.webp"
        data-height="180"
        data-width="161"
        height="108"
        width="96"
        :style="`height: 108px; width: 96.6px; transform: translate(${-90 + x * 0.33}px, 12px) rotate(0deg) scale(1); opacity: 1`"
      />
    </div>
    <div class="layer">
      <img
        src="https://i0.hdslb.com/bfs/vc/bf896616dec163402ec79a81f936af67932eca2f.png@1c.webp"
        data-height="106"
        data-width="2448"
        height="74"
        width="1713"
        :style="`height: 74.2px; width: 1713.6px; transform: translate(${-350 + x * 0.31}px, 56px) rotate(0deg) scale(1); opacity: 1`"
      />
    </div>
    <div class="layer">
      <img
        src="https://i0.hdslb.com/bfs/vc/32aa867cd3e8fba371a2be90d7d844a68c67f7a5.png@1c.webp"
        data-height="267"
        data-width="328"
        height="146"
        width="180"
        :style="`height: 146.85px; width: 180.4px; transform: translate(${-165 + x * 0.33}px, 0px) rotate(0deg) scale(1); opacity: 1`"
      />
    </div>
    <div class="layer">
      <img
        src="https://i0.hdslb.com/bfs/vc/c6263485a0218c887848c47a0fe4f515006e1567.png@1c.webp"
        data-height="268"
        data-width="345"
        height="160"
        width="207"
        :style="`height: 160.8px; width: 207px; transform: translate(${-360 + x * 0.41}px, 12px) rotate(0deg) scale(1); opacity: 1`"
      />
    </div>
    <div class="layer">
      <img
        src="https://i0.hdslb.com/bfs/vc/cd4fda9478b06a8d81cd04f69d7a2ad475d1db40.png@1c.webp"
        data-height="105"
        data-width="2750"
        height="63"
        width="1650"
        :style="`height: 63px; width: 1650px; transform: translate(${-132 + x * 0.43}px, 54px) rotate(0deg) scale(1); opacity: 1`"
      />
    </div>
    <div class="layer">
      <img
        src="https://i0.hdslb.com/bfs/vc/0479542df6a7c5deddf60fbbf63b6e1f1f770c08.png@1c.webp"
        data-height="269"
        data-width="428"
        height="161"
        width="256"
        :style="`height: 161.4px; width: 256.8px; transform: translate(${180 + x * 0.3}px, 12px) rotate(0deg) scale(1); opacity: 1`"
      />
    </div>
    <div class="layer">
      <img
        src="https://i0.hdslb.com/bfs/vc/b6f4359409b4550fb38594d8c227902db29c720a.png@1c.webp"
        data-height="281"
        data-width="3000"
        height="238"
        width="2550"
        :style="`height: 238.85px; width: 2550px; transform: translate(${-85 + x * 0.3}px, -4.25px) rotate(0deg) scale(1); opacity: 1`"
      />
    </div>
    <div class="layer">
      <img
        src="https://i0.hdslb.com/bfs/vc/8a6899088fc9dcd37a0039884fb77f69dc3b1c30.png@1c.webp"
        data-height="281"
        data-width="626"
        height="224"
        width="500"
        :style="`height: 224.8px; width: 500.8px; transform: translate(${-1440 + x * 0.2}px, 0px) rotate(0deg) scale(1); opacity: 1`"
      />
    </div>
    <div class="layer">
      <img
        src="https://i0.hdslb.com/bfs/vc/96704a6197153e1717a910e6c227937f34743cee.png@1c.webp"
        data-height="281"
        data-width="681"
        height="168"
        width="408"
        :style="`height: 168.6px; width: 408.6px; transform: translate(${1500 + x * 0.2}px, 0px) rotate(0deg) scale(1); opacity: 1`"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const offset = ref(0);
const start = ref(0);

const x = computed(() => {
  if (!offset.value || !start.value) {
    return 0;
  }
  return offset.value - start.value;
});

const down = e => {
  console.log(123, e);
  start.value = e.clientX;
};
const move = e => {
  console.log(1231, e);
  offset.value = e.clientX;
};

const tdown = e => {
  console.log(345, e);
  start.value = e.touches[0].clientX;
};
const tmove = e => {
  console.log(3456, e);
  offset.value = e.touches[0].clientX;
};
</script>

<style lang="less" scoped>
.animated-banner {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  height: 200px;
}

.layer {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
