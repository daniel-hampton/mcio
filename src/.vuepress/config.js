// const purgecss = require('@fullhuman/postcss-purgecss')({

//   // Specify the paths to all of the template files in your project 
//   content: [
//     './src/**/*.*',
//     './src/.vuepress/**/*.*',
//     './node_modules/@vuepress/theme-default/**/*.*',
//     // etc.
//   ],

//   // Include any special characters you're using in this regular expression
//   defaultExtractor: content => content.match(/[A-z0-9-:\/]+/g) || []
// })

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
  postcss: {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ]
  },
  plugins: [
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
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
        selector: '.theme-default-content :not(a) > img:not([data-no-zoom])'
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
