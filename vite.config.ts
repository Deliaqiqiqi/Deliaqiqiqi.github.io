import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { allowedHosts: ["terminal.local"] },
  // Relative assets work at the current project path and after a repository rename.
  base: process.env.VITE_BASE_PATH || "./",
});
