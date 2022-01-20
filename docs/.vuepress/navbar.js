// nav
module.exports = [
  { text: '书籍', link: '/pages/books/' },
  {
    text: '基础', link: '/pages/js/',
    children: [
      { text: 'HTML', link: '/pages/html/' },
      { text: 'CSS', link: '/pages/css/' },
      { text: 'JavaScript', link: '/pages/js/' },
    ],
  },
  {
    text: '框架',
    children: [
      { text: 'Vue', link: '/pages/vue/' },
      { text: 'React', link: '/pages/react/' },
    ],
  },
  {
    text: 'Node',
    link: '/pages/node/'
  },
  {
    text: '工程化',
    children: [
      { text: 'Git', link: '/pages/git/' },
      { text: 'webpack', link: '/pages/webpack/' },
      { text: 'Vite', link: '/pages/vite/' },
    ],
  },
  {
    text: '性能优化',
    children: [
      { text: '性能优化', link: '/pages/performance/' },
      { text: 'Vue性能优化', link: '/pages/vue-performance/' },
    ],
  },
  {
    text: '计网&浏览器',
    children: [
      { text: '计算机网络', link: '/pages/network/' },
      { text: '浏览器原理', link: '/pages/browser/' },
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
  { text: '关于', link: '/pages/about/' },
  { text: '收藏', link: '/pages/bookmark/' }
]
