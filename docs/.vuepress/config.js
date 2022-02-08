const navbar = require('./navbar.js');

module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '前端核心进阶',
  description: '这是我的第一个 VuePress 站点',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,Vue,React,python,css3,html5,Node,git,github,markdown',
      },
    ],
  ],
  editLink: false,
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  root: '/pages/books/',
  themeConfig: {
    home: '/pages/books/',
    navbar, // 顶部导航
    // logo: '/images/logo.png', //左上侧 logo
    repo: 'https://github.com/jslaowang',
    editLink: false,
    lastUpdated: false,
    contributors: false,
  },
}