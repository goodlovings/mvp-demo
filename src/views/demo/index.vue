<template>
  <div id="drawflow" style="height: 80vh; width: 100vw"></div>
  <van-button type="primary" @click="exportdata">888888</van-button>
  <van-button type="primary" @click="addnode">9999999</van-button>
</template>

<script setup>
import Drawflow from "drawflow";
import { h, getCurrentInstance, render } from "vue";
import Test from "@/components/test.vue";

const Vue = { version: 3, h, render };
let editor = ref(null);

onMounted(() => {
  var id = document.getElementById("drawflow");

  const internalInstance = getCurrentInstance();
  editor.value = new Drawflow(id, Vue, internalInstance.appContext.app._context);
  editor.value.reroute = true;
  // editor.value.zoom_max = 1.6;
  // editor.value.zoom_min = 0.5;
  // editor.value.zoom_value = 0;
  editor.value.start();
  const dataToImport = {
    drawflow: {
      Home: {
        data: {
          2: {
            id: 2,
            name: "slack",
            data: {},
            class: "slack",
            html: '\n          <div>\n            <div class="title-box"><i class="fab fa-slack"></i> Slack chat message</div>\n          </div>\n          ',
            typenode: false,
            inputs: {
              input_1: {
                connections: [
                  {
                    node: "7",
                    input: "output_1",
                  },
                ],
              },
            },
            outputs: {},
            pos_x: 1028,
            pos_y: 87,
          },

          7: {
            id: 7,
            name: "facebook",
            data: {},
            class: "facebook",
            html: '\n        <div>\n          <div class="title-box"><i class="fab fa-facebook"></i> Facebook Message</div>\n        </div>\n        ',
            typenode: false,
            inputs: {},
            outputs: {
              output_1: {
                connections: [
                  {
                    node: "2",
                    output: "input_1",
                  },
                ],
              },
            },
            pos_x: 347,
            pos_y: 87,
          },
          6: {
            id: 6,
            name: "github",
            data: {
              name: "https://github.com/jerosoler/Drawflow",
            },
            class: "github",
            html: '\n          <div>\n            <div class="title-box"><i class="fab fa-github "></i> Github Stars</div>\n            <div class="box">\n              <p>Enter repository url</p>\n            <input type="text" df-name>\n            </div>\n          </div>\n          ',
            typenode: false,
            inputs: {},
            outputs: {},
            pos_x: 341,
            pos_y: 191,
          },
        },
      },
    },
  };

  editor.value.import(dataToImport);
});

const exportdata = () => {
  console.log(editor.value.export());
};

const addnode = () => {
  editor.value.updateNodeDataFromId(6, {
    name: "7777777",
  });
  editor.value.registerNode("name", Test, { checked: true }, {});
  editor.value.addNode("github", 1, 2, 150, 300, "github", { checked: true }, "name", "vue");
};
</script>

<style lang="scss" scoped></style>
