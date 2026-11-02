# Niki Hu · 个人网站

个人主页采用暖白底、深灰字和灰紫色点缀，首页大幅照片配有细灰边框和白色内衬。

## 本地查看

在 Chrome 或 Safari 中直接打开 `sample/index.html`，无需安装依赖或构建。

修改文件并保存后，刷新浏览器即可查看；若内容没有更新，可按 `⌘ ⇧ R` 强制刷新。

线上地址：https://nikihu-a.github.io/

GitHub 仓库：https://github.com/Nikihu-a/nikihu-a.github.io

线上版本通过 GitHub Pages 发布，推送到 `main` 后自动部署 `sample/` 中的网站。

当前版本为浅色个人主页，包含完整照片、中英文切换、五组精选作品、页内介绍与 GitHub 联系入口。

## 文件结构

```text
README.md
.github/workflows/pages.yml # 自动发布流程
sample/
├── index.html             # 页面结构、样式与交互
├── css/
│   └── portfolio.css      # 作品区与详情样式
├── js/
│   ├── language.js        # 中英文文案与语言切换
│   ├── projects-data.js   # 五组作品的中英文内容
│   └── portfolio.js       # 作品卡片、详情与返回交互
└── assets/
    ├── niki-london.jpg    # 用户提供的伦敦照片
    └── works/             # 网页图片与手动播放的演示视频
```

## 已实现

- 浅色首页、用户提供的完整伦敦照片与衬线标题。
- 照片采用 1px 细灰边框和 10px 白色内衬。
- “关于我”和“保持联系”采用页内锚点导航。
- 右上角“中 / EN”切换全页语言；默认中文，通过浏览器本地存储记住选择。
- 五组精选作品，点击打开页内详情，支持 Escape、关闭按钮与浏览器返回；可直接分享 `#/项目编号` 链接。
- 原图转成 WebP 并按需加载；演示视频由用户点击播放。
- 手机适配及减少动态效果的系统偏好支持。
- 首页中的个人照片：电脑在名字右侧，手机在介绍下方，保留原色与完整构图。

## 已确认的个人信息

- 姓名：Niki Hu。
- 来自上海。
- 毕业于伦敦艺术大学（University of the Arts London，UAL）。
- 曾在伦敦 Pagepeek 担任 AI 产品经理，并从事运营工作。

以上来自用户在本次对话中的说明。不要擅自添加具体学位、任职日期、项目成果或当前所在地。

## 内容维护

页面结构与 CSS 位于 `sample/index.html`，中英文文案与切换逻辑位于 `sample/js/language.js`。照片使用网站内的相对路径，不依赖桌面上的原始文件。

联系方式使用用户已提供的 GitHub 账号 Nikihu-a。首批作品选取 Pagepeek、Lost Crab and Little Flower、Memories in the Ashes、Dream Printer、LINK；机器人项目保留团队贡献说明，不添加未经证实的成效数字。

## 验证状态

已进行基础 HTML 解析、页内锚点与照片路径检查，并查看桌面浏览器截图。已检查中英文切换、刷新后语言保存、页内导航及 375px 手机宽度；无横向溢出和脚本错误。五组作品已检查打开、Escape 关闭、关闭后焦点恢复、浏览器返回/前进、直接访问作品链接、详情内语言切换，以及演示视频元数据加载和默认暂停状态。发布流程通过 GitHub Actions 执行，发布后核对线上 HTML 与照片的 SHA-256。


## 更新线上网站

修改并保存文件后，在项目目录的终端运行：

```sh
git add sample README.md
git commit -m "Update personal website"
git push
```

在仓库的 Actions 页面查看发布进度。首次使用新终端时可运行 `gh --version` 检查 GitHub CLI。


## 作品素材维护

作品文案位于 `sample/js/projects-data.js`，包含中文与英文。更新脚本、样式时同步修改 `index.html` 对应的 `?v=` 版本号。

原始作品文件不移动、不上传整份 PDF 或 Keynote；本地整理资料在 `资料整理/`，已加入忽略列表。可用以下脚本重新生成网页素材（需要 macOS 的 Swift、PDFKit、AVFoundation，以及 Python Pillow）：

```sh
swift tools/prepare-portfolio.swift /path/to/source /tmp/portfolio-rendered
python3 tools/optimize-portfolio-assets.py /path/to/source /tmp/portfolio-rendered sample/assets/works
```

演示视频封面由原视频抽帧生成，位于 `sample/assets/works/ashes-poster.webp`。
