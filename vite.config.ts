/**
 * Vite 配置文件
 * Vue 3 项目的构建配置，包含代码拆分和优化设置
 * @author Sogrey
 * @date 2025-11-15
 * @version 1.0
 */

/**
 * Vite 配置文件
 * Vue 3 项目的构建配置，包含代码拆分和优化设置
 * @author Sogrey
 * @date 2025-11-15
 * @version 1.0
 */

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 将 Cherry Markdown 拆分到单独的 chunk
          cherry: ['cherry-markdown'],
          // 将 ECharts 和 Mermaid 拆分到单独的 chunks
          echarts: ['echarts'],
          mermaid: ['mermaid'],
          // 将 Vue 相关库拆分
          vue: ['vue', 'vue-router']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  }
})
