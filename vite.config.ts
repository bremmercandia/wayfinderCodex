import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
      host: "::",
      port: 8080,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // GitHub Pages project sites are served from a sub-path; CI sets GH_PAGES_BASE.
    // Locally (and in the Enter preview) it stays at the root.
    base: process.env.GH_PAGES_BASE ?? '/',
    build: {
      outDir: 'dist',
    }
});