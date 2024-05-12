import { defineConfig, presetUno, transformerDirectives } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  theme: {
    fontFamily: {
      display: ["Radio Canada"],
      body: ["Source Sans Pro"],
    },
  },
  transformers: [transformerDirectives()],
});
