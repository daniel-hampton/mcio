module.exports = {
  title: 'Modern Coder',
  description: 'Learn. Grow. Thrive. Develop your coding superpowers step by step.',
  head: [
    ['meta', {property: 'og:site_name', content: 'Modern Coder'}],
  ],
  markdown: {},
  themeConfig: {
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    logo: '/coffee.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorials', link: '/tutorials/' },
      { text: 'Contact', link: '/contact'},
      { text: 'About', link: '/about'},
    ],
    sidebar: {
      '/tutorials/': [
        'getting-started-with-python',
      ],
    },
  },
  plugins: [
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
      },
    ],
    [
      'vuepress-plugin-medium-zoom',
      {
        // selector: '.my-wrapper .my-img',
        // delay: 1000,
        // options: {
        //   margin: 24,
        //   background: '#BADA55',
        //   scrollOffset: 0,
        // },
      },
    ],
  ],
};
