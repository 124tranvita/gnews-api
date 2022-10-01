import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://124tranvita.github.io/gnews-api/",
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  plugins: [react()],
});
