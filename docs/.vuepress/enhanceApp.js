export default async ({
  Vue,
  isServer
}) => {
  if (!isServer) {
    await import('../../src/index')
      .then(module => {
        const {
          VueQuarterSelect,
          VueQuarterPanel
        } = module
        Vue.use(VueQuarterSelect)
        Vue.use(VueQuarterPanel)
      })
      .catch(e => {})

    await import('@3scarecrow/vue-quarter-select')
      .then(module => {
        Vue.component('vue-quarter-select-v1', module.default)
      })

    await import('@laomao800/vue-demo-box')
      .then(module => {
        const DemoBox = module.default
        Vue.use(DemoBox, {
          jsRes: [
            '//unpkg.com/vue/dist/vue.js',
            '//unpkg.com/@3scarecrow/vue-quarter-select/dist/vue-quarter-select.umd.min.js'
          ]
        })
      })
  }
}
