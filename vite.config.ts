import vue from "@vitejs/plugin-vue";
import { telefunc } from "telefunc/vite";
import tailwindcss from "@tailwindcss/vite";
import vike from "vike/plugin";
import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "#app": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [vike(), tailwindcss(), telefunc(), vue()],

  build: {
    rollupOptions: {
      external: ["wrangler"],
    },
  },
});
