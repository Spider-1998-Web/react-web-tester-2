import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-web-tester-2/", // <-- your GitHub repo name
  plugins: [react()],
});
