<template>
  <el-container>
    <el-aside width="150px">
      <el-button type="primary" @click="addMsg">新增message</el-button>
    </el-aside>
    <el-main>
      <div id="drawflow"></div>
    </el-main>
  </el-container>
  <el-drawer v-model="drawer" title="I am the title" :with-header="false" @closed="update">
    回复语：
    <el-input v-model="curDrawerData.data.msg" :rows="4" type="textarea" placeholder="Please input" />
  </el-drawer>
</template>

<script setup>
import Drawflow from "drawflow";
import "drawflow/dist/drawflow.min.css";
import "../../assets/beautiful.css";
import message from "./components/message.vue";

import { h, getCurrentInstance, render } from "vue";
const Vue = { version: 3, h, render };
const internalInstance = getCurrentInstance();

const editor = ref(null);
let data = ref({});
let curDrawerData = ref({});
let curNodeId = ref();
let drawer = ref(false);
let gapTimeStamp = ref(0);

onMounted(() => {
  const id = document.getElementById("drawflow");
  editor.value = new Drawflow(id, Vue, internalInstance.appContext.app._context);
  editor.value.reroute = true;
  editor.value.start();
  const dataToImport = {
    drawflow: {
      Home: {
        data: {},
      },
    },
  };
  editor.value.import(dataToImport);
  // 选中node触发
  editor.value.on("nodeSelected", id => {
    curDrawerData.value = data.value.drawflow.Home.data[id];
    curNodeId.value = id;
  });

  editor.value.on("nodeUnselected", id => {
    curDrawerData.value = {};
    curNodeId.value = null;
  });
  // 记录点击时的时间戳
  editor.value.on("click", e => {
    gapTimeStamp.value = e.timeStamp;
  });
  // 记录点击结束的时间戳
  editor.value.on("mouseUp", e => {
    // 防止拖拽：当有节点被选中 && 点击时间差小于300ms，显示弹窗
    if (e.timeStamp - gapTimeStamp.value < 300 && curNodeId.value) {
      drawer.value = true;
    }
  });
});

const addMsg = () => {
  editor.value.registerNode("message", message);
  editor.value.addNode("message", 1, 1, 150, 300, "", { msg: "77777" }, "message", "vue");
  data.value = editor.value.export();
  console.log(78, data.value);
};
const update = () => {
  editor.value.updateNodeDataFromId(curNodeId.value, { ...curDrawerData.value.data });
};
</script>

<style lang="less" scoped>
#drawflow {
  height: 90vh;
  width: 80vw;
  border: 2px solid #999;
}
</style>
