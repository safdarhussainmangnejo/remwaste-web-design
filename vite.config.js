import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/your-repo-name/", // 👈 IMPORTANT: Match your GitHub repo name
  plugins: [react()],
});
