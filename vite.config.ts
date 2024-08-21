import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    watch: false,
  },
  plugins: [tsConfigPaths()],
});
