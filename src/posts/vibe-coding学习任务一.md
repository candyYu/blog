---
layout: post.njk
title: vide-coding学习第一课
date: 2027-02-09
description: 如何用在线编程网站实现一个原型
---


# 目前主流可用工具


| 工具              | 链接                         | 说明                                                         |
| ----------------- | ---------------------------- | ------------------------------------------------------------ |
| Google AI Studio  | https://aistudio.google.com/apps | 谷歌官方出品，支持 Gemini 模型，适合快速原型开发             |
| Figma Make        | https://figma.com/make      | 与设计工具深度整合，适合设计师快速实现交互原型               |
|清华智普|https://chat.z.ai/|国内可用|

  

[拓展可用工具测评](https://datawhalechina.github.io/easy-vibe/zh-cn/stage-1/appendix-articles/example0-1/vibe-coding-tools-snake-game-tutorial.html)



# 实现贪吃蛇

```
帮我做一个贪吃蛇游戏：
1. 用方向键控制蛇的移动
2. 吃到食物后蛇会变长，分数增加
3. 撞到墙壁或自己的身体就游戏结束
4. 要有开始和重新开始按钮
5. 界面要简洁好看
```


```
帮我改一下，把贪吃蛇吃的内容改成单词。
1、我可以吃不同的单词，它们会被收集在一个盒子里
2、当蛇吃了8个单词时，llm 应该根据这些单词创作一首诗，我们可以根据需要重新混合这首诗。
3、当诗完成后，下一步将自动根据这首诗创建一幅图像。
```
  
  途中遇到了报错
![截图](/assets/images/vibeCoding/image.png)
xw

最终效果
![效果](/assets/images/vibeCoding/result.png)