---
layout: post.njk
title: 前端性能：从首屏到可交互
date: 2025-02-01
description: LCP、FID、CLS 与真实用户指标的实践与取舍。
---

前端性能直接影响用户留存与转化。本文从 Core Web Vitals 出发，聊聊首屏与可交互的实践。

## 核心指标

- **LCP**（Largest Contentful Paint）：最大内容绘制，建议 &lt; 2.5s
- **FID / INP**：首次输入延迟，建议 &lt; 100ms
- **CLS**：累积布局偏移，建议 &lt; 0.1

## 常见手段

1. **资源**：压缩图片、用 `srcset`、关键 CSS 内联、非关键 JS 延迟
2. **渲染**：减少主线程长任务、避免布局抖动
3. **加载**：预连接、预加载关键资源，骨架屏或 loading 状态

真实用户数据（RUM）比实验室数据更值得看，但要配合业务指标一起看。
