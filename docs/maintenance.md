# Portfolio maintenance

## 内容与署名

- 页面结构位于 `sample/index.html`；个人介绍及中英文切换位于 `sample/js/language.js`。
- 六组作品的中英文内容位于 `sample/js/projects-data.js`，卡片与详情逻辑位于 `sample/js/portfolio.js`。
- 个人经历、学位、任职日期、项目成果与所在地应有明确依据；不添加未经证实的信息或效果数字。
- 团队机器人项目保留合作成员与个人职责，概念和原型准确注明阶段。
- Pagepeek 官方链接为 <https://pagepeek.ai/>。官网截图用于展示产品入口；作品详情中的历史传播与活动材料用于说明工作案例，不能将当前官网归为本人设计。

## 视觉与媒体

首页使用暖白、深灰和灰紫色。伦敦个人照片保留原色与完整构图，采用细灰边框和白色内衬。

音频粒子案例只展示技术内容，保留当前技术名称和 `#/audio-particles` 链接。配图仅使用声谱、节点、波形与粒子输出区域，不重新引入原稿背景或整页标题。

机器人与 Dream Printer 封面直接提取原始实拍/渲染图，由网页完成构图。Pagepeek 使用官网首屏截图替代海报拼图。装置视频默认暂停，由访客手动播放。

原始作品文件不移动、不上传整份 PDF 或 Keynote。素材用网站内相对路径，本地整理目录 `资料整理/` 已被 Git 忽略。

## 素材重建

常规页面与演示视频提取需要 macOS、Swift、PDFKit、AVFoundation 和 Python Pillow：

```sh
swift tools/prepare-portfolio.swift /path/to/source /tmp/portfolio-rendered
python3 tools/optimize-portfolio-assets.py /path/to/source /tmp/portfolio-rendered sample/assets/works
```

机器人与产品原始图片另由 PyMuPDF、Pillow 提取：

```sh
python3 tools/prepare-object-covers.py /path/to/source sample/assets/works
```

以上操作不改动源 PDF。视频封面 `ashes-poster.webp` 来自原视频抽帧。官网截图应通过浏览器重新拍摄，注明来源与拍摄时间。

## 发布检查

1. 更新样式或脚本时，递增 `sample/index.html` 中对应的 `?v=` 版本号。
2. 检查中英文、375px 手机宽度、图片加载、作品详情与键盘关闭。
3. 只提交本次修改，推送后检查 [Actions](https://github.com/Nikihu-a/nikihu-a.github.io/actions)。
4. 核对线上页面和修改过的资源文件；更新 README 的预览时等待图片加载与入场动画完成。
