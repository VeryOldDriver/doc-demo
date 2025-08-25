import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "左边标题",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: "文章目录",
    outline: [2, 6], // 定义索引的标题级别
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '家', link: '/' },
      { text: '示例', link: '/docs/markdown/markdown-examples.md' }
    ],

  //  sidebar: [
  //     {
  //       text: 'Examples',
  //       items: [
  //         { text: 'Markdown演示', link: '/markdown-examples' },
  //         { text: '运行API演示', link: '/api-examples' }
  //       ]
  //     },
  //     {
  //       text: 'Examples',
  //       items: [
  //         { text: 'Markdown演示2', link: '/markdown-examples' },
  //         { text: '运行API演示2', link: '/api-examples' }
  //       ]
  //     }
  //   ],
    // sidebar: {
    //   "/docs/markdown": set_sidebar("docs/markdown"),
    // },
    // sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      copyright:'1111111111111111111'
    }
  }
})
