<template>
  <div id="markdown-container"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import 'cherry-markdown/dist/cherry-markdown.css';
import Cherry from 'cherry-markdown';
import { previewConfig } from '@/configs/CherryPreviewConfig'

let cherry: Cherry | null = null
const testMD = './demo.md'

onMounted(async () => {
  // 使用 fetch 获取 markdown 文件内容
  const response = await fetch(testMD);
  const basicMd = await response.text();
  // 在Vite中使用?raw导入的文件内容已经是字符串，无需通过fetch获取
  const config = Object.assign({}, previewConfig, { id: 'markdown-container', value: basicMd });
  cherry = new Cherry(config);
  cherry.setTheme('light');
  cherry.setCodeBlockTheme('one-dark');
})

onUnmounted(() => {
  cherry?.destroy();
  cherry = null
})
</script>
