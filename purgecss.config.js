module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.md',
    './src/.vuepress/**/*.md',
    './src/.vuepress/components/*.vue',
  ],
  css: ['./tailwindUtilsOnly.styl'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
}