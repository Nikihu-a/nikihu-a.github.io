# Niki Hu · 个人网站

沉浸式个人名片样稿，采用暖黑、象牙白与淡香槟色配色，搭配衬线大字和首页照片。

## 本地查看

在 Chrome 或 Safari 中直接打开 `sample/index.html`，无需安装依赖或构建。

修改文件并保存后，刷新浏览器即可查看；若内容没有更新，可按 `⌘ ⇧ R` 强制刷新。

线上地址：https://nikihu-a.github.io/

GitHub 仓库：https://github.com/Nikihu-a/nikihu-a.github.io

通过 GitHub Pages 发布，推送到 `main` 后自动部署 `sample/` 中的网站。

## 文件结构

```text
README.md
.github/workflows/pages.yml # 自动发布流程
sample/
├── index.html             # 页面结构、样式与交互
└── assets/
    └── niki-london.jpg    # 用户提供的伦敦照片
```

## 已实现

- 沉浸式首页、用户提供的伦敦照片与暖色画框。
- “关于”和“联系”弹层，支持 Escape 关闭。
- 手机适配及减少动态效果的系统偏好支持。
- 首页中的个人照片：电脑在名字右侧，手机在介绍下方，保留原色与完整构图。

## 已确认的个人信息

- 姓名：Niki Hu。
- 来自上海。
- 毕业于伦敦艺术大学（University of the Arts London，UAL）。
- 曾在伦敦 Pagepeek 担任 AI 产品经理，并从事运营工作。

以上来自用户在本次对话中的说明。不要擅自添加具体学位、任职日期、项目成果或当前所在地。

## 内容维护

页面内容、CSS 和 JavaScript 均位于 `sample/index.html`。照片使用网站内的相对路径，不依赖桌面上的原始文件。

联系方式仍为明确标注的占位内容；作品和其他经历尚未提供。

## 验证状态

已进行基础 HTML 解析、内容与照片路径检查。尚未完成自动化浏览器视觉与交互实测。发布时检查 GitHub Actions 状态，并核对线上 HTML 和照片与本地文件的 SHA-256。


## 更新线上网站

修改并保存文件后，在项目目录的终端运行：

```sh
git add sample README.md
git commit -m "Update personal website"
git push
```

在仓库的 Actions 页面查看发布进度。首次使用新终端时可运行 `gh --version` 检查 GitHub CLI。
