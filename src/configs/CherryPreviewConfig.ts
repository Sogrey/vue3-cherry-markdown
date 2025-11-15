/**
 * Cherry 预览配置
 * 配置 Cherry Markdown 编辑器的预览功能和外部依赖
 * @author Sogrey
 * @date 2025-11-15
 * @version 1.0
 */

// 按需导入 ECharts 组件
import * as echarts from 'echarts/core'
// import { BarChart, LineChart, PieChart } from 'echarts/charts'
// import {
//   TitleComponent,
//   TooltipComponent,
//   GridComponent,
//   LegendComponent
// } from 'echarts/components'
// import { CanvasRenderer } from 'echarts/renderers'

// // 注册必要的 ECharts 组件
// echarts.use([
//   BarChart,
//   LineChart,
//   PieChart,
//   TitleComponent,
//   TooltipComponent,
//   GridComponent,
//   LegendComponent,
//   CanvasRenderer
// ])

import mermaid from 'mermaid';
const previewConfig = {
  id: 'markdown',
  nameSpace: 'cherry',// 定义主题的作用范围，相同nameSpace的实例共享主题配置
  externals: {
    // 扩展 - 按需加载
    echarts,
    mermaid
  },
  table: {
    enableChart: true
  },
  engine: {
    global: {
      chart: {
        enableChart: true,
        chartRenderEngine: echarts, // ECharts实例
        externals: ['echarts'],
        chartEngineOptions: {
          theme: 'dark', // 主题配置
          renderer: 'svg',
          // width: 600,
          // height: 400
        }
      }
    }
  },
  toolbars: {
    toolbar: false,
    // 配置目录
    toc: {
      updateLocationHash: true, // 要不要更新URL的hash
      defaultModel: 'full', // pure: 精简模式/缩略模式，只有一排小点； full: 完整模式，会展示所有标题
      position: 'fixed', // 悬浮目录的悬浮方式。当滚动条在cherry内部时，用absolute；当滚动条在cherry外部时，用fixed
      cssText: 'right: 20px;',
    },
  },
  editor: {
    defaultModel: 'previewOnly',
    keepDocumentScrollAfterInit: true,
  },
  autoScrollByHashAfterInit: true,
  previewer: {
    // 自定义markdown预览区域class
    className: 'markdown',

    // 是否启用预览区域编辑能力（目前支持编辑图片尺寸、编辑表格内容）
    enablePreviewerBubble: false,
  },
  keydown: [],
  urlProcessor(url: string, srcType: string) {
    console.log(`url-processor`, url, srcType);
    return url;
  },
};

export { previewConfig };


