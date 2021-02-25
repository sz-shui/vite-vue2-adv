import { defineConfig } from "vite";
const { createVuePlugin } = require("vite-plugin-vue2");

export default defineConfig({
  plugins: [createVuePlugin()],
});
