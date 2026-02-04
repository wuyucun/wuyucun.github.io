export const redirects = JSON.parse("{\"/demo/bar.html\":\"/demo/z6whdri3/\",\"/demo/foo.html\":\"/demo/xq91nap4/\",\"/invest/%E9%BB%84%E9%87%91%E6%8A%95%E8%B5%84/goldun.html\":\"/invest/2qpm6xqz/\",\"/invest/%E9%BB%84%E9%87%91%E6%8A%95%E8%B5%84/goleprice.html\":\"/invest/32323232/\",\"/invest/%E9%BB%84%E9%87%91%E6%8A%95%E8%B5%84/\":\"/invest/gold/\",\"/blog/preview/custom-component.example.html\":\"/blog/zc2ilm3v/\",\"/blog/preview/markdown.html\":\"/blog/7mrynq13/\",\"/lifedoc/%E5%81%A5%E8%BA%AB%E8%AE%B0/01.html\":\"/lifedoc/o5oou88i/\",\"/lifedoc/%E5%81%A5%E8%BA%AB%E8%AE%B0/\":\"/lifedoc/edqd2tu1/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/vue/yunriver/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/demo/z6whdri3/", { loader: () => import(/* webpackChunkName: "demo_z6whdri3_index.html" */"D:/vue/yunriver/docs/.vuepress/.temp/pages/demo/z6whdri3/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/xq91nap4/", { loader: () => import(/* webpackChunkName: "demo_xq91nap4_index.html" */"D:/vue/yunriver/docs/.vuepress/.temp/pages/demo/xq91nap4/index.html.js"), meta: {"title":"foo"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"D:/vue/yunriver/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/invest/", { loader: () => import(/* webpackChunkName: "invest_index.html" */"D:/vue/yunriver/docs/.vuepress/.temp/pages/invest/index.html.js"), meta: {"title":"投资笔记"} }],
  ["/lifedoc/", { loader: () => import(/* webpackChunkName: "lifedoc_index.html" */"D:/vue/yunriver/docs/.vuepress/.temp/pages/lifedoc/index.html.js"), meta: {"title":"人生笔记"} }],
  ["/invest/2qpm6xqz/", { loader: () => import(/* webpackChunkName: "invest_2qpm6xqz_index.html" */"D:/vue/yunriver/docs/.vuepress/.temp/pages/invest/2qpm6xqz/index.html.js"), meta: {"title":"goldun"} }],
  ["/invest/32323232/", { loader: () => import(/* webpackChunkName: "invest_32323232_index.html" */"D:/vue/yunriver/docs/.vuepress/.temp/pages/invest/32323232/index.html.js"), meta: {"title":"黄金价格"} }],
  ["/invest/gold/", { loader: () => import(/* webpackChunkName: "invest_gold_index.html" */"D:/vue/yunriver/docs/.vuepress/.temp/pages/invest/gold/index.html.js"), meta: {"title":"投资黄金"} }],
  ["/blog/zc2ilm3v/", { loader: () => import(/* webpackChunkName: "blog_zc2ilm3v_index.html" */"D:/vue/yunriver/docs/.vuepress/.temp/pages/blog/zc2ilm3v/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/blog/7mrynq13/", { loader: () => import(/* webpackChunkName: "blog_7mrynq13_index.html" */"D:/vue/yunriver/docs/.vuepress/.temp/pages/blog/7mrynq13/index.html.js"), meta: {"title":"Markdown"} }],
  ["/lifedoc/o5oou88i/", { loader: () => import(/* webpackChunkName: "lifedoc_o5oou88i_index.html" */"D:/vue/yunriver/docs/.vuepress/.temp/pages/lifedoc/o5oou88i/index.html.js"), meta: {"title":"万事开头难"} }],
  ["/lifedoc/edqd2tu1/", { loader: () => import(/* webpackChunkName: "lifedoc_edqd2tu1_index.html" */"D:/vue/yunriver/docs/.vuepress/.temp/pages/lifedoc/edqd2tu1/index.html.js"), meta: {"title":"投资肌肉"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/vue/yunriver/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"D:/vue/yunriver/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"Blog"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"D:/vue/yunriver/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"D:/vue/yunriver/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"D:/vue/yunriver/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);
