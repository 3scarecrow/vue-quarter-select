import VueQuarterSelect from './QuarterSelect.vue'

VueQuarterSelect.install = function (Vue) {
  Vue.component('VueQuarterSelect', VueQuarterSelect)
  Vue.component('vue-quarter-select', VueQuarterSelect)
}

if (typeof window !== 'undefined' && window.Vue) {
  VueQuarterSelect.install(window.Vue)
}

export default VueQuarterSelect
