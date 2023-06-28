import '@/index.less'
import Select from '@/components/Select.vue'
import Panel from '@/components/Panel'

function bindInstall(name, component) {
  const install = vue => vue.component(name, component)

  component.install = install

  window && window.Vue && install(window.Vue)

  return component
}

const VueQuarterSelect = bindInstall(Select.name, Select)
const VueQuarterPanel = bindInstall(Panel.name, Panel)
export default VueQuarterSelect
export {
  VueQuarterSelect,
  VueQuarterPanel
}
