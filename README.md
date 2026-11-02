# Niki Hu · 个人网站

个人主页的浅色设计样稿，采用暖白底、深灰字和灰紫色点缀，保留首页大幅照片。

## 本地查看

在 Chrome 或 Safari 中直接打开 `sample/index.html`，无需安装依赖或构建。

修改文件并保存后，刷新浏览器即可查看；若内容没有更新，可按 `⌘ ⇧ R` 强制刷新。

线上地址：https://nikihu-a.github.io/

GitHub 仓库：https://github.com/Nikihu-a/nikihu-a.github.io

线上版本通过 GitHub Pages 发布，推送到 `main` 后自动部署 `sample/` 中的网站。

当前本地改版位于 `sample/editorial-redesign` 分支，尚未发布。用户已否定全屏大字与拖动照片的海报方案，现已退回上一版浅色主页。后续改版先依据具体参考确认视觉，避免继续凭风格名称重做。

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

- 浅色首页、用户提供的完整伦敦照片与衬线标题。
- “关于我”和“保持联系”采用页内锚点导航。
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

联系方式使用用户已提供的 GitHub 账号 Nikihu-a；作品和其他经历尚未提供。

## 验证状态

已进行基础 HTML 解析、内容与照片路径检查。浅色改版已查看桌面浏览器截图；手机与交互检查未完成。此前线上版本已通过 GitHub Actions 部署并核对 HTML 和照片的 SHA-256；当前本地改版尚未上线。


## 更新线上网站

修改并保存文件后，在项目目录的终端运行：

```sh
git add sample README.md
git commit -m "Update personal website"
git push
```

在仓库的 Actions 页面查看发布进度。首次使用新终端时可运行 `gh --version` 检查 GitHub CLI。
