/**
 * @preserve
 * @3scarecrow/vue-quarter-select v2.0.0
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@/index.less'), require('@/components/Select.vue'), require('@/components/Panel.vue')) :
  typeof define === 'function' && define.amd ? define(['exports', '@/index.less', '@/components/Select.vue', '@/components/Panel.vue'], factory) :
  (global = global || self, factory(global['vue-quarter-select'] = {}, null, global.Select, global.Panel));
}(this, (function (exports, index_less, Select, Panel) { 'use strict';

  Select = Select && Select.hasOwnProperty('default') ? Select['default'] : Select;
  Panel = Panel && Panel.hasOwnProperty('default') ? Panel['default'] : Panel;

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

  Object.defineProperty(exports, '__esModule', { value: true });

})));
