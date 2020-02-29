module.exports = {
  title: 'Modern Coder',
  description: 'Learn. Grow. Thrive. Develop your coding superpowers step by step.',
  head: [
    [
      'script',
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-3J43DKSRRQ",
        async: true,
      }
    ],
    [ 'script', { src: 'ga-init.js' } ],
    ['meta', { property: 'og:site_name', content: 'Modern Coder' }],
    [
      'script', 
      { 
        src: "https://kit.fontawesome.com/37553958c7.js",  
        crossorigin:"anonymous",
      },
    ]

  ],
  markdown: {},
  themeConfig: {
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    logo: '/mcio-icon.svg',
    repo: 'dhampton084/mcio',
    docsDir: 'src',
    editLinks: true,
    editLinkText: 'Help improve this page!',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorials', link: '/tutorials/' },
      // { text: 'Contact', link: '/contact'},
      // { text: 'About', link: '/about'},
    ],
    // sidebar: {
    //   '/tutorials/': [
    //     'getting-started-with-python/',
    //   ],
    // },
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
    ['@vuepress/back-to-top'],
  ],
};
