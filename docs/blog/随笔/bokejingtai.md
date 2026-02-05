---
title: Markdown
tags:
  - 建站笔记
createTime: 2026/02/05 10:07:25
permalink: /blog/newbegin/

---

> 摘要：静态站点意味着“优雅”、“轻量”、“快”。而且不再需要服务器VPS，依靠目前免费的GitHub Pages和腾讯Pages等，可以获得良好的部署和速度体验。

博客的信息流主要是时间顺序，虽然依靠文章分类和标签功能可以实现有序列表，但仍是碎片化的，适合写日记、写新闻、记录生活等。

但我脑海里一直都在构思一个“文档”形式的网站，它的内容排序不是时间流，而是优雅的侧边栏和简洁的Markdown文本作，内容强关联、成体系地展现出来。很快就发现了**vuepress**这个项目，完美的命中我的需求，左侧是索引性质的侧边栏，中间是简洁的内容，右侧是本文的目录。

![2026-02-05-10-10-00-image](./../../.vuepress/public/2026-02-05-10-10-00-image.png)

还有一个独特的优势在于，Vuepress是静态部署的页面，也就意味着更快的访问速度和更小的服务器需求，甚至不需要服务器。Github Pages等可以直接托管静态文件，如果对Github的速度不满意，那就可以接入[腾讯云Pages](https://console.cloud.tencent.com/edgeone/pages)或者[阿里云ESA](https://esa.console.aliyun.com/edge/pages/list)。这些都是**免费**的。

## Vuepress本地搭建

基于vuepress及其plume主题（[https://theme-plume.vuejs.press/](https://theme-plume.vuejs.press/)），在本地搭建了vupress容器。容器中可以储存markdown文档。运行 `docs:build` 脚本可以构建静态网站，目录`docs/.vuepress/dist` ，将目录上传至服务器或者Pages就可以访问。

详细过程可以参阅官方文档：https://vuejs.press/zh/

## 部署到GitHub并设置自动工作流

1. 通过Github Desktop或者其他Git工具，将容器上传到GitHub的repo的main分支。

2. 通过Github的工作流（workflows），实现自动化：一旦PUSH，则自动构建网站，生成静态网站目录，并自动将静态网站目录部署到repo的另一个分支（例如gh-page）。在.github/workflows/docs.yml配置：

   ```
   name: docs
   
   on:
     # 每当 push 到 main 分支时触发部署
     push:
       branches: [main]
     # 手动触发部署
     workflow_dispatch:
   
   
        # 核心：添加这部分权限配置
   permissions:
        contents: write
   
   jobs:
     docs:
       runs-on: ubuntu-latest
   
    
   
       steps:
         - uses: actions/checkout@v4
           with:
             # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
             fetch-depth: 0
   
         - name: Setup pnpm
           uses: pnpm/action-setup@v4
           with:
             # 选择要使用的 pnpm 版本
            # version: 10
             # 使用 pnpm 安装依赖
             run_install: true
   
         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             # 选择要使用的 node 版本
             node-version: 22
             # 缓存 pnpm 依赖
             cache: pnpm
   
         # 运行构建脚本
         - name: Build VuePress site
           run: pnpm docs:build
   
         # 查看 workflow 的文档来获取更多信息
         # @see https://github.com/crazy-max/ghaction-github-pages
         - name: Deploy to GitHub Pages
           uses: crazy-max/ghaction-github-pages@v4
           with:
             # 部署到 gh-pages 分支
             target_branch: gh-pages
             # 部署目录为 VuePress 的默认输出目录
             build_dir: docs/.vuepress/dist
           env:
             # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
             GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
   ```

   

3. 配置GitHub Pages访问这个分支，至此，就已经实现了`xxx.github.io`域名的访问。

## 配置腾讯云EDGEONE PAGES加速

目前腾讯云和阿里云都提供免费的Pages服务。以腾讯云为例，[腾讯云Pages](https://console.cloud.tencent.com/edgeone/pages)页面中添加项目，通过Github链接添加，选择对应repo的gh-page分支。即可实现自动化部署。

在腾讯云绑定自定义域名即可，免费、自动配置SSL。即可访问。需要注意的是，只有备案域名才可以使用国内的加速，非备案域名只能使用全球加速（不含中国大陆）。

![mermaid-diagram-2026-02-05-122224](./../../.vuepress/public/mermaid-diagram-2026-02-05-122224.svg)

