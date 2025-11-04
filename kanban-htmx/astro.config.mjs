import { defineConfig } from "astro/config";
import node from "@astrojs/node";
// Cloudflare Pages adapter (for deployment)
// import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  // For local development with node adapter
  adapter: node({ mode: "middleware" }),
  // For Cloudflare Pages deployment, uncomment below and comment out node:
  // import cloudflare from "@astrojs/cloudflare";
  // adapter: cloudflare({ mode: "directory" }),
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
    ssr: {
      external: ["better-sqlite3"],
    },
  },
});
