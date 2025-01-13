// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  base: "",
  build: {
    assetsPrefix: ".",
  },
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                @import "@/styles/reset.scss";
                @import "@/styles/variants/_mixin.scss";
                @import "@/styles/global.scss";
                @import "@/styles/responsive.scss";`,
        },
      },
    },
  },
});
