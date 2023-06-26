import '@/index.less'
import Select from '@/components/Select.vue'
import Panel from '@/components/Panel'

function bindInstall(name, component) {
  const install = vue => vue.component(name, component)

  component.install = install

  window && window.Vue && install(window.Vue)

  return component
}

const QuarterSelect = bindInstall(Select.name, Select)
const QuarterPanel = bindInstall(Panel.name, Panel)
export default QuarterSelect
export {
  QuarterPanel
}
