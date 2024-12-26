// @ts-nocheck
import { resolve } from 'path'
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 'src'를 '@'로 매핑
      '@tests': resolve(__dirname, 'tests'), // 'tests'를 '@tests'로 매핑
    },
  },
});