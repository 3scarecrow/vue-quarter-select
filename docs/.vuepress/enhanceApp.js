import VueQuarterSelect from '../../src'
export default({ Vue }) => {
  Vue.use(VueQuarterSelect)
  // import('https://unpkg.com/browse/@3scarecrow/vue-quarter-select@0.1.1/dist/vue-quarter-select.esm.js')
  //   .then(module => {
  //     console.log('module',module)
  //     const VueQuarterSelect = module.default
  //     Vue.use(VueQuarterSelect)
  //   })
  //   .catch(e => {})

  // import('@laomao800/vue-demo-box')
  //   .then(module => {
  //     const DemoBox = module.default
  //     Vue.use(DemoBox, {
  //       jsRes: [
  //         '//unpkg.com/vue/dist/vue.js',
  //         '//unpkg.com/@3scarecrow/vue-quarter-select/dist/vue-quarter-select.umd.min.js'
  //       ]
  //     })
  //   })
}
