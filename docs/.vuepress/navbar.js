// nav
module.exports = [
  {
    text: '书籍&文章',
    children: [
      { text: '书籍', link: '/pages/books' },
      { text: '文章', link: '/pages/article/' },
      { text: '课程', link: '/pages/course/' },
    ]
  },
  {
    text: '基础&框架', link: '/pages/js/',
    children: [
      { text: 'HTML', link: '/pages/html/' },
      { text: 'CSS', link: '/pages/css/' },
      { text: 'JavaScript', link: '/pages/js/' },
      { text: 'TypeScript', link: '/pages/ts/' },
      { text: 'Vue', link: '/pages/vue/' },
      { text: 'React', link: '/pages/react/' },
    ],
  },
  {
    text: 'Node&工程化',
    children: [
      { text: 'Node', link: '/pages/node/' },
      { text: 'Git', link: '/pages/git/' },
      { text: 'Webpack', link: '/pages/webpack/' },
      { text: 'Vite', link: '/pages/vite/' },
      { text: '性能优化', link: '/pages/performance/' },
      { text: 'Vue性能优化', link: '/pages/vue-performance/' },
      { text: '设计模式', link: '/pages/design/' },
    ],
  },
  {
    text: '计网&浏览器',
    children: [
      { text: '浏览器原理', link: '/pages/browser/' },
      { text: '计算机网络', link: '/pages/network/' },
    ],
  },
  {
    text: '手写&算法',
    children: [
      { text: '手写代码', link: '/pages/write/' },
      { text: '代码输出', link: '/pages/console/' },
      { text: '常考算法', link: '/pages/algorithm/' },
    ],
  },
  {
    text: '采坑&博客',
    children: [
      { text: '采坑', link: '/pages/problem/', },
      { text: '博客', link: '/pages/blog/' }
    ],
  },
  {
    text: '关于&收藏',
    children: [
      { text: '关于', link: '/pages/about/' },
      { text: '收藏', link: '/pages/bookmark/' },
      { text: '健身', link: '/pages/fitness/' },
    ],
  },

]
