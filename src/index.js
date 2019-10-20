import VueQuarterSelect from './QuarterSelect.vue'

VueQuarterSelect.install = function (Vue) {
  Vue.component('VueQuarterSelect', VueQuarterSelect)
  Vue.component('vue-quarter-select', VueQuarterSelect)
}
export {
  VueQuarterSelect
}
export default VueQuarterSelect

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(VueQuarterSelect)
}
