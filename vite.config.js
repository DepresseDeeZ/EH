import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Move React and React DOM to a separate chunk
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust the warning limit if necessary
  },
});
