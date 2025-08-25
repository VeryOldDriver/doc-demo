import { defineConfig } from "vitepress";
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";
import { withMermaid } from "vitepress-plugin-mermaid";

// import markdownItAnchor from "markdown-it-anchor";
// import MarkdownIt from "markdown-it";
// import { tocPlugin } from "@mdit-vue/plugin-toc";

// 目前有两个问题没搞懂，一个是配置了srcDir以后，我的style.css样式不生效了。第二个是markdown扩展插件到底怎么用的啊

// https://vitepress.dev/reference/site-config
export default withMermaid({
  base:'/doc-demo/',
  // srcDir: "./docs", // 配置md文档的映射目录，默认根路径
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "OldDriver的文档站",
  description: "A bugDesigner Site",
  themeConfig: {
    outlineTitle: "文章目录",
    outline: [2, 6], // 定义索引的标题级别
    // outline: "deep",
    // https://vitepress.dev/reference/default-theme-config
    logo: "logo.svg", // 配置logo位置，public目录
    // 顶部导航栏配置
    nav: [
      {
        text: "前端",
        items: [
          { text: "React", link: "/docs/front-end/react" },
          { text: "Vue", link: "/docs/front-end/vue" }
        ],
      },
      {
        text: "后端",
        items: [
          {
            text: "SpringBoot集成各种技术",
            link: "/docs/back-end/integrate-tech",
          },
          { text: "RabbitMQ", link: "/docs/back-end/rabbitmq" },
          { text: "ElasticSearch", link: "/docs/back-end/elasticsearch" },
          { text: "Mybatis-Plus", link: "/docs/back-end/mybatis-plus" },
          { text: "SpringBoot项目模版", link: "/docs/back-end/springboot-template" },
        ],
      },
      {
        text: "Python",
        items: [
          { text: "基础语法", link: "/docs/python/base" },
          { text: "爬虫", link: "/docs/python/spider" },
        ],
      },
      {
        text: "网安",
        items: [
          { text: "信息收集", link: "/docs/net-sec/info-collect" },
          { text: "web攻防", link: "/docs/net-sec/web-aad" },
          { text: "内网渗透", link: "/docs/net-sec/intranet-pene" },
          { text: "漏洞复现", link: "/docs/net-sec/vul-reproduce" },
        ],
      },
      {
        text: "数学建模",
        items: [
          { text: "数据分析三剑客", link: "/docs/math-model/data-ana" },
          { text: "评价类模型", link: "/docs/math-model/eval" },
          { text: "预测类模型", link: "/docs/math-model/forecast" },
          { text: "优化类模型", link: "/docs/math-model/optimize" },
          { text: "分类模型", link: "/docs/math-model/classify" },
        ],
      },
      {
        text: "爬虫案例",
        items: [
          { text: "B站刷播放量接口", link: "/docs/spiders/Bilibili" },
          { text: "某练通爬取", link: "/docs/spiders/dlt" },
          { text: "中考移民问题", link: "/docs/spiders/middle_exam" },
        ],
      },
      {
        text: "教程",
        items: [
          {
            text: "Electron+Vue3项目打包",
            link: "/docs/Tutorial/electron_package",
          },
          { text: "VitePress搭建和部署", link: "/docs/Tutorial/vitepress" },
        ],
      },
      {
        text: "其他",
        items: [
          { text: "Git", link: "/docs/tools/git" },
          { text: "Docker", link: "/docs/tools/docker" },
          { text: "iTime软件使用说明书", link: "/docs/tools/iTime_docs" },
          { text: "常用图标", link: "/docs/tools/icons" },
          { text: "小知识", link: "/docs/tools/tips" },
        ],
      },
    ],
    // 侧边栏配置，这个函数自动生成侧边栏
    // sidebar: {
    //   "/docs/Tutorial/vitepress": set_sidebar("docs/Tutorial"),//三栏 布局
    //   "/docs/Tutorial/electron_package": set_sidebar("docs/Tutorial")
    // },
    navbar: true, //开启导航栏，我设置成false也没啥用不知道为啥
    // sidebar: false, // 关闭侧边栏
    lastUpdated: true, // 显示上次修改时间
    aside: "left", // 设置右侧侧边栏在左侧显示
    // 社交链接，内置的都是国外的，国内只能通过svg设置
    socialLinks: [
      { icon: "github", link: "https://github.com/VeryOldDriver" }
    ],
    // 底部配置
    footer: {
      copyright: "Copyright@ 2025 OldDriver",
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
  // 配置markdown扩展
  markdown: {
    lineNumbers: true, // 开启代码块行号
    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    // anchor: {
    //   permalink: markdownItAnchor.permalink.headerLink(),
    // },

    // // options for @mdit-vue/plugin-toc
    // // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    // toc: { level: [2, 3] },
    // config: (md) => {
    //   // use more markdown-it plugins!
    //   md.use(tocPlugin);
    // },
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container
  },
});
