module.exports = {
  presets: [
    '@vue/app'
  ],
  env: {
    test: {
      presets: [
        [
          '@vue/app',
          {
            useBuiltIns: 'usage',
            modules: 'commonjs'
          }
        ]
      ]
    }
  }
}
