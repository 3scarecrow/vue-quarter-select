import VueQuarterSelect from './quarter-select.vue'

function bindInstall(name, component) {
  const install = vue => vue.component(name, component)

  component.install = install

  window && window.Vue && install(window.Vue)

  return component
}

export default bindInstall(VueQuarterSelect.name, VueQuarterSelect)
