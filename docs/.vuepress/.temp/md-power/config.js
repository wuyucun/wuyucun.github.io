import { defineClientConfig } from 'vuepress/client'
import Tabs from 'D:/vue/yunriver/node_modules/.pnpm/vuepress-plugin-md-power@1._140ab5db784a496a94f5ce12c1969fe2/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'D:/vue/yunriver/node_modules/.pnpm/vuepress-plugin-md-power@1._140ab5db784a496a94f5ce12c1969fe2/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from 'D:/vue/yunriver/node_modules/.pnpm/vuepress-plugin-md-power@1._140ab5db784a496a94f5ce12c1969fe2/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from 'D:/vue/yunriver/node_modules/.pnpm/vuepress-plugin-md-power@1._140ab5db784a496a94f5ce12c1969fe2/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'
import { setupMarkHighlight } from 'D:/vue/yunriver/node_modules/.pnpm/vuepress-plugin-md-power@1._140ab5db784a496a94f5ce12c1969fe2/node_modules/vuepress-plugin-md-power/lib/client/composables/mark.js'

import 'D:/vue/yunriver/node_modules/.pnpm/vuepress-plugin-md-power@1._140ab5db784a496a94f5ce12c1969fe2/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
  },
  setup() {
        setupMarkHighlight("eager")

  }
})
