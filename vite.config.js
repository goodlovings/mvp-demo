import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "vite-plugin-eslint";
import legacy from "@vitejs/plugin-legacy";
import AutoImport from "unplugin-auto-import/vite";
import { viteMockServe } from "vite-plugin-mock";
import Components from "unplugin-vue-components/vite";
import { VantResolver, ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/" : "/",
  plugins: [
    vue(),
    eslint(),
    legacy({
      targets: ["ios 10", "not IE 11"],
    }),
    AutoImport({
      imports: ["vue", "vue-router"],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    Components({
      resolvers: [VantResolver(), ElementPlusResolver()],
    }),
    viteMockServe({
      mockPath: "./mocks/",
      localEnabled: !!(process.env.VITE_USE_MOCK || false),
      logger: true,
      prodEnabled: false,
    }),
  ],
  build: {
    target: ["chrome51", "safari11"],
    emptyOutDir: true,
    assetsInlineLimit: 409600,
    cssCodeSplit: !process.env.NO_HASH,
    rollupOptions:
      process.env.NO_HASH || false
        ? {
            output: {
              entryFileNames: "assets/[name].js",
              chunkFileNames: "assets/[name].js",
              assetFileNames: chunkInfo => {
                const ext = chunkInfo.name.split(".").pop();
                if (!chunkInfo.name || !ext) return "";
                // 图片打包保持文件目录结构，防止打包中被覆盖
                if (["svg", "gif", "png", "jpeg", "jpg"].includes(ext.toLocaleLowerCase())) {
                  return "assets" + chunkInfo.name.split("assets")[1];
                } else {
                  return `assets/${chunkInfo.name}`;
                }
              },
            },
          }
        : {
            output: {
              entryFileNames: "assets/[name].[hash].js",
              chunkFileNames: "assets/[name].[hash].js",
              assetFileNames: "assets/[name].[hash].[ext]",
            },
          },
  },
  server: {
    host: "0.0.0.0",
    proxy:
      process.env.VITE_USE_PROXY || false
        ? {
            "/aj": {
              target: "",
              changeOrigin: true,
            },
          }
        : {},
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
