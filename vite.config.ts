import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// https://vitejs.dev/config/

const pathSrc = path.resolve(__dirname, "src");
console.log("pathSrc", pathSrc);

export default defineConfig({
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: path.resolve(pathSrc, "auto-imports.d.ts"), // 指定自动导入函数类型声明文件路径
      eslintrc: {
        enabled: true, // 是否自动生成 eslint 规则，建议生成之后设置 false
        filepath: "./.eslintrc-auto-import.json", // 指定自动导入函数 eslint 规则的文件
      },
      resolvers: [ElementPlusResolver(), IconsResolver({})],
      vueTemplate: true,
    }),
    Components({
      dts: path.resolve(pathSrc, "components.d.ts"), // 指定组件类型声明文件路径
      resolvers: [ElementPlusResolver(), IconsResolver({})],
    }),
    Icons({
      autoInstall: true,
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
    }),
  ],
  css: {
    // CSS 预处理器
    preprocessorOptions: {
      //define global scss variable
      scss: {
        javascriptEnabled: true,
        additionalData: `@use "@/styles/variables.scss" as *;`,
      },
    },
  },
});
