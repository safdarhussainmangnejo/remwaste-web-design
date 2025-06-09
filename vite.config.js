import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/remwaste-web-design/", // 👈 IMPORTANT: Match your GitHub repo name
  plugins: [react()],
});
