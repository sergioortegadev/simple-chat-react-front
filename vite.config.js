import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  /*  Si usamos server poner en App.jsx, o donde esté el socket, const socket = io("/"); */
  /* server: {
    proxy: {
      "/socket.io": {
        target: "https://simplechat-70s3qzep.b4a.run/",
        ws: true,
      },
    },
  }, */
});
