import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
      "@queries": "/src/services/hooks/queries",
      "@mutations": "/src/services/hooks/mutations",
      "@api": "/src/services/api",
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@utils": "/src/utils",
      "@pages": "/src/pages",
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      include: "**/*.svg",
      svgrOptions: {
        exportType: "default",
      },
    }),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: "autoservice-frontend",
        short_name: "autoservice-frontend",
        description: "autoservice-frontend",
        theme_color: "#ffffff",
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: false,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
});
