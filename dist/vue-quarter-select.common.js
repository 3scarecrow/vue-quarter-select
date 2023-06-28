/**
 * @preserve
 * @3scarecrow/vue-quarter-select v2.0.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('@/index.less');
var Select = _interopDefault(require('@/components/Select.vue'));
var Panel = _interopDefault(require('@/components/Panel.vue'));

function bindInstall(name, component) {
  var install = function (vue) { return vue.component(name, component); };

  component.install = install;

  window && window.Vue && install(window.Vue);

  return component
}

var VueQuarterSelect = bindInstall(Select.name, Select);
var VueQuarterPanel = bindInstall(Panel.name, Panel);

exports.VueQuarterPanel = VueQuarterPanel;
exports.VueQuarterSelect = VueQuarterSelect;
exports.default = VueQuarterSelect;
