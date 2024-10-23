import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // 최신 Sass API 사용
        additionalData: `@use '@hyun2/figma/foundation.scss' as *;`,
      },
    },
  },
});
