> 摘要：静态站点意味着“优雅”、“轻量”、“快”。而且不再需要服务器VPS，依靠目前免费的GitHub Pages和腾讯Pages等，可以获得良好的部署和速度体验。

博客的信息流主要是时间顺序，虽然依靠文章分类和标签功能可以实现有序列表，但仍是碎片化的，适合写日记、写新闻、记录生活等。

但我脑海里一直都在构思一个“文档”形式的网站，它的内容排序不是时间流，而是优雅的侧边栏和简洁的Markdown文本作，内容强关联、成体系地展现出来。很快就发现了**vuepress**这个项目，完美的命中我的需求，左侧是索引性质的侧边栏，中间是简洁的内容，右侧是本文的目录。

![](D:\vue\yunriver\docs\.vuepress\public\2026-02-05-10-10-00-image.png)

还有一个独特的优势在于，Vuepress是静态部署的页面，也就意味着更快的访问速度和更小的服务器需求，甚至不需要服务器。Github Pages等可以直接托管静态文件，如果对Github的速度不满意，那就可以接入[腾讯云Pages](https://console.cloud.tencent.com/edgeone/pages)或者[阿里云ESA](https://esa.console.aliyun.com/edge/pages/list)。这些都是**免费**的。



## Vuepress搭建

基于vuepress及其plume主题（[https://theme-plume.vuejs.press/](https://theme-plume.vuejs.press/)），在本地搭建了vupress容器。容器中可以储存markdown文档。运行 `docs:build` 脚本可以构建静态网站，目录`docs/.vuepress/dist` ，将目录上传至服务器或者Pages就可以访问。

详细过程可以参阅官方文档：https://vuejs.press/zh/

## 部署到GitHub Pages并设计自动化工作流

1. 通过Github Desktop或者其他Git工具，将容器上传到GitHub的repo的main分支。

2. 通过Github的工作流（workflows），实现自动化：一旦PUSH，则自动构建网站，生成静态网站目录，并自动将静态网站目录部署到repo的另一个分支（例如gh-page）。

3. 通过GitHub Pages访问这个分支，实现网址访问。
