# 部署到 GitHub Pages（username.github.io/仓库名）

按下面步骤可以把博客部署到 **https://你的用户名.github.io/仓库名/**，每次 push 到 `main` 会自动构建并更新。

---

## 一、在 GitHub 上建新仓库

1. 打开 [GitHub New Repository](https://github.com/new)。
2. **Repository name** 填你想要的路径名，例如：`blog`（以后访问就是 `xxx.github.io/blog/`）。
3. 选 Public，**不要**勾选 “Add a README file”。
4. 点 Create repository，记下仓库地址，例如：`https://github.com/你的用户名/blog.git`。

---

## 二、本地用「只含博客」的目录推上去

博客要作为**单独仓库**推送，所以要用一个**只包含当前 blog 目录内容**的目录（不能带父级 vibe-coding 的其它文件）。

### 方式 A：复制 blog 再初始化（推荐）

在终端执行（把 `你的用户名` 和 `blog` 换成你的 GitHub 用户名和仓库名）：

```bash
# 1. 进入项目上一级目录，复制 blog 为单独目录
cd /Users/candy/Learn/vibe-coding
cp -r blog blog-deploy
cd blog-deploy

# 2. 初始化 Git（若已有 .git 可删掉再 init：rm -rf .git && git init）
git init

# 3. 添加远程仓库（替换成你的仓库地址）
git remote add origin https://github.com/你的用户名/blog.git

# 4. 提交并推送
git add .
git commit -m "Initial commit: 11ty blog"
git branch -M main
git push -u origin main
```

### 方式 B：当前就在 blog 目录、且可以整目录当仓库时

若 `blog` 目录本身就可以当作一个独立仓库（没有依赖父级其它文件），可以直接在 `blog` 里操作：

```bash
cd /Users/candy/Learn/vibe-coding/blog

# 若已有 .git 且是父项目，请改用方式 A 复制一份
git init
git remote add origin https://github.com/你的用户名/blog.git
git add .
git commit -m "Initial commit: 11ty blog"
git branch -M main
git push -u origin main
```

**GitHub Actions 怎么设置？**  
不用在网页上单独配置。仓库里已有 `.github/workflows/deploy.yml`，推送到 `main` 后会自动运行：安装依赖 → 构建 → 把 `_site` 推到 `gh-pages` 分支。你只需在下面第三步把 Pages 的发布来源选成 **gh-pages** 分支即可。

---

## 三、开启 GitHub Pages

1. 打开仓库 **Settings → Pages**。
2. **Source** 选 **Deploy from a branch**。
3. **Branch** 选 **gh-pages**，目录选 **/ (root)**，点 Save。

等第一次 Actions 跑完（约 1～2 分钟），访问：

**https://你的用户名.github.io/blog/**

（若仓库名不是 `blog`，把最后一段改成你的仓库名即可。）

---

## 四、之后更新博客

改完文章或样式后，在**同一个仓库**里提交并推送即可，Actions 会自动重新构建并部署：

```bash
cd /path/to/blog-deploy   # 或你的 blog 仓库目录
git add .
git commit -m "更新文章或样式"
git push
```

推送后到仓库的 **Actions** 页看是否成功，成功后刷新 **username.github.io/仓库名** 即可看到更新。

---

## 说明

- **PATH_PREFIX**：构建时已自动设为 `/${{ github.event.repository.name }}`，所以链接会正确带上子路径（如 `/blog/`），无需再改配置。
- **本地预览**：不设 `PATH_PREFIX` 时，`npm run serve` 仍是根路径访问；部署到 GitHub 后才会是 **username.github.io/仓库名**。
- 若仓库名改了，只需在 GitHub 上改仓库名，重新跑一次 Actions 即可，无需改代码。
