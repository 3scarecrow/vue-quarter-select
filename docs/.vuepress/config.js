const path = require('path')

module.exports = {
  title: `Vue quarter select`,
  base: '/vue-quarter-select/',
  configureWebpack: (config, isServer) => {
    return {
      resolve: {
        alias: {
          '@': path.join(__dirname, '../../src'),
        },
      },
    }
  },
  // locales: {
  //   '/': {
  //     lang: 'en-US'
  //   },
  //   '/zh/': {
  //     lang: 'zh-CN'
  //   }
  // },
  themeConfig: {
    repo: '3scarecrow/vue-quarter-select',
    docsDir: 'docs',
    nav: [{
      text: '版本',
      items: [{
          text: 'v2.x',
          link: '/'
        },
        {
          text: 'v1.x',
          link: '/v1/'
        }
      ]
    }],
    // locales: {
    //   '/': {
    //     label: 'English',
    //     selectText: 'Languages',
    //     ariaLabel: 'Select language'
    //   },
    //   '/zh/': {
    //     label: '简体中文',
    //     selectText: '选择语言',
    //     ariaLabel: '选择语言'
    //   },
    // }
  }
}
