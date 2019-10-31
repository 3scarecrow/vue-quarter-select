export default({ Vue }) => {
  import('../../src/index')
    .then(module => {
      const VueQuarterSelect = module.default
      Vue.use(VueQuarterSelect)
    })
    .catch(e => {})

  import('@laomao800/vue-demo-box')
    .then(module => {
      const DemoBox = module.default
      Vue.use(DemoBox, {
        jsRes: [
          '//unpkg.com/vue/dist/vue.js',
          '//unpkg.com/@3scarecrow/vue-quarter-select/dist/vue-quarter-select.esm.js'
        ]
      })
    })
}
