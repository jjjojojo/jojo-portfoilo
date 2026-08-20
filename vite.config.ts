import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// GitHub Pages는 username.github.io/<저장소이름>/ 으로 서빙되므로
// 빌드 시에만 하위 경로를 base로 잡는다. (dev 서버는 루트 그대로)
// 저장소 이름을 바꾸면 아래 값도 같이 바꿔야 한다.
const REPO_NAME = 'jojo-portfoilo';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? `/${REPO_NAME}/` : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
