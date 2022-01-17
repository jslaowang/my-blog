// nav
module.exports = [
  {
    text: 'JavaScript', link: '/pages/js/'
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
      { text: 'webpack', link: '/pages/webpack/' },
      { text: 'Vite', link: '/pages/vite/' },
    ],
  },
  { text: '关于', link: '/pages/about/' },
  { text: '收藏', link: '/pages/bookmark/' }
]
