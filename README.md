# Blog

只写 **Markdown**，自动生成和当前风格一致的博客（基于 11ty + 现有设计系统）。

## 工作流

1. **写文章**：在 `src/posts/` 下新建 `.md` 文件，写上 frontmatter 和正文即可。
2. **生成站点**：运行 `npm run build`，输出在 `_site/`。
3. **本地预览**：运行 `npm run serve`，浏览器打开提示的地址（如 http://localhost:8080）。

无需手写 HTML，也不用为每篇文章维护单独页面。

## 如何写一篇新文章

在 `src/posts/` 下新建任意名字的 `.md`，例如 `my-post.md`：

```markdown
---
layout: post.njk
title: 你的文章标题
date: 2025-02-09
description: 一两句话摘要，会出现在首页列表和 SEO。
---

这里开始写正文，支持 **Markdown**：

- 列表
- 代码块
- 引用等
```

保存后执行 `npm run build`，首页会自动多出一篇，并生成独立文章页。

## 配图（本地图片）

截图、配图放在 **`src/assets/images/`** 下（可按文章建子文件夹，如 `vibe-coding学习任务一/screenshot.png`）。构建后对应站点路径 `/assets/images/...`。

在 Markdown 里用**站根路径**引用即可：

```markdown
![截图说明](/assets/images/vibe-coding学习任务一/snake.png)
```

- 路径必须以 `/assets/images/` 开头。
- 支持子目录，便于按文章整理。

正文里的图片会自动适配宽度、圆角和深色边框。

## 目录结构

```
blog/
  src/
    _includes/     # 模板（不用改）
      base.njk     # 全局布局（导航、页脚、字体与样式）
      post.njk     # 单篇文章布局
    assets/
      images/      # 配图：截图、图片放这里，文章里用 /assets/images/xxx.png 引用
    posts/         # 只在这里写 .md
      *.md
    index.njk      # 首页模板
  _site/           # 构建输出（npm run build 后生成）
  .eleventy.js     # 11ty 配置（文章集合、日期格式等）
  package.json
```

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm install` | 安装依赖（首次或拉新代码后） |
| `npm run build` | 从 `src/` 生成静态站到 `_site/` |
| `npm run serve` | 构建并启动本地预览（改 MD 会自动重建） |

## 设计系统（沿用）

- **风格**：Swiss Modernism 2.0
- **配色**：主色 `#18181B`、CTA `#2563EB`、背景 `#FAFAFA`
- **字体**：标题 Archivo、正文 Space Grotesk

首页结构：Hero（标题 + 订阅表单）→ 近期文章（自动从 `src/posts/*.md` 生成）→ 订阅数 → 关于作者。

## 部署

把 `_site/` 里的内容部署到任意静态托管即可（如 GitHub Pages、Vercel、Netlify）。根目录指向 `_site` 或把构建输出目录设为 `_site`。
