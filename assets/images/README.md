# 博客配图目录

把文章里用到的截图、配图放在这里（可建子文件夹按文章分类）。

构建后会出现在站点根目录的 `/assets/images/` 下。

## 在文章里怎么引用

在 Markdown 里用**站根路径**写图片地址，例如：

```markdown
![截图说明](/assets/images/某篇文章/截图.png)
```

- 路径必须以 `/assets/images/` 开头（对应本目录）。
- 支持子文件夹，例如：`/assets/images/vibe-coding学习任务一/snake.png`。

## 建议结构示例

```
src/assets/images/
  vibe-coding学习任务一/
    screenshot1.png
    snake-game.png
  design-system/
    ...
```

这样每篇文章的图集中在一个子文件夹里，方便管理。
