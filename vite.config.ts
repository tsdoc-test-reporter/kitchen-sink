/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    setupFiles: './src/test/vitest-setup.ts',
    include: ["./src/**/*.spec.{ts,tsx}"],
    reporters: ["default", "./src/test/vitest-reporter.ts"]
  }
})
