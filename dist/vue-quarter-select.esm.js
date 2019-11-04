/**
 * @preserve
 * @3scarecrow/vue-quarter-select v1.0.0
 */
/**
 * @preserve
 * @laomao800/vue-select-wrapper v1.2.0
 */

var toString = Object.prototype.toString;

var kindOf = function kindOf(val) {
  if (val === void 0) { return 'undefined'; }
  if (val === null) { return 'null'; }

  var type = typeof val;
  if (type === 'boolean') { return 'boolean'; }
  if (type === 'string') { return 'string'; }
  if (type === 'number') { return 'number'; }
  if (type === 'symbol') { return 'symbol'; }
  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }

  if (isArray(val)) { return 'array'; }
  if (isBuffer(val)) { return 'buffer'; }
  if (isArguments(val)) { return 'arguments'; }
  if (isDate(val)) { return 'date'; }
  if (isError(val)) { return 'error'; }
  if (isRegexp(val)) { return 'regexp'; }

  switch (ctorName(val)) {
    case 'Symbol': return 'symbol';
    case 'Promise': return 'promise';

    // Set, Map, WeakSet, WeakMap
    case 'WeakMap': return 'weakmap';
    case 'WeakSet': return 'weakset';
    case 'Map': return 'map';
    case 'Set': return 'set';

    // 8-bit typed arrays
    case 'Int8Array': return 'int8array';
    case 'Uint8Array': return 'uint8array';
    case 'Uint8ClampedArray': return 'uint8clampedarray';

    // 16-bit typed arrays
    case 'Int16Array': return 'int16array';
    case 'Uint16Array': return 'uint16array';

    // 32-bit typed arrays
    case 'Int32Array': return 'int32array';
    case 'Uint32Array': return 'uint32array';
    case 'Float32Array': return 'float32array';
    case 'Float64Array': return 'float64array';
  }

  if (isGeneratorObj(val)) {
    return 'generator';
  }

  // Non-plain objects
  type = toString.call(val);
  switch (type) {
    case '[object Object]': return 'object';
    // iterators
    case '[object Map Iterator]': return 'mapiterator';
    case '[object Set Iterator]': return 'setiterator';
    case '[object String Iterator]': return 'stringiterator';
    case '[object Array Iterator]': return 'arrayiterator';
  }

  // other
  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};

function ctorName(val) {
  return val.constructor ? val.constructor.name : null;
}

function isArray(val) {
  if (Array.isArray) { return Array.isArray(val); }
  return val instanceof Array;
}

function isError(val) {
  return val instanceof Error || (typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number');
}

function isDate(val) {
  if (val instanceof Date) { return true; }
  return typeof val.toDateString === 'function'
    && typeof val.getDate === 'function'
    && typeof val.setDate === 'function';
}

function isRegexp(val) {
  if (val instanceof RegExp) { return true; }
  return typeof val.flags === 'string'
    && typeof val.ignoreCase === 'boolean'
    && typeof val.multiline === 'boolean'
    && typeof val.global === 'boolean';
}

function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}

function isGeneratorObj(val) {
  return typeof val.throw === 'function'
    && typeof val.return === 'function'
    && typeof val.next === 'function';
}

function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}

var hasValues = function has(val) {
  switch (kindOf(val)) {
    case 'boolean':
    case 'date':
    case 'function':
    case 'null':
    case 'number':
      return true;
    case 'undefined':
      return false;
    case 'regexp':
      return val.source !== '(?:)' && val.source !== '';
    case 'buffer':
      return val.toString() !== '';
    case 'error':
      return val.message !== '';
    case 'string':
    case 'arguments':
      return val.length !== 0;
    case 'file':
    case 'map':
    case 'set':
      return val.size !== 0;
    case 'array':
    case 'object':
      for (var i = 0, list = Object.keys(val); i < list.length; i += 1) {
        var key = list[i];

    if (has(val[key])) {
          return true;
        }
      }
      return false;

    // everything else
    default: {
      return true;
    }
  }
};

var CSS_UNITS = [
  'em', 'ex', '%', 'px', 'cm', 'mm', 'in', 'pt', 'pc',
  'ch','rem','vh','vw','vmin','vmax'
];

var parseSizeWithUnit = function(value, defaultUnit) {
  var validReg = new RegExp('^-?\\d+(.\\d+)?(' + CSS_UNITS.join('|') + ')$', 'i');
  var unit = 'px';
  if (defaultUnit) {
    unit = CSS_UNITS.indexOf(defaultUnit) > -1
    ? defaultUnit
    : 'px';
  }
  if (validReg.test(value)) {
    return value
  } else if (typeof value === 'number') {
    return value + unit
  }
  var num = parseInt(value, 10);
  return !isNaN(num) ? num + unit : null
};

/**
 * Fork from: https://github.com/vue-bulma/click-outside
 */
function validate(binding) {
  if (typeof binding.value !== 'function') {
    // eslint-disable-next-line no-console
    console.warn(
      '[Vue-click-outside:] provided expression',
      binding.expression,
      'is not a function.'
    );
    return false
  }

  return true
}

function isPopup(popupItem, elements) {
  if (!popupItem || !elements) {
    return false
  }

  for (var i = 0, list = elements; i < list.length; i += 1) {
    var element = list[i];

    try {
      if (popupItem.contains(element)) {
        return true
      }
      if (element.contains(popupItem)) {
        return false
      }
    } catch (e) {
      return false
    }
  }

  return false
}

function isServer(vNode) {
  return (
    typeof vNode.componentInstance !== 'undefined' &&
    vNode.componentInstance.$isServer
  )
}

var directive = {
  bind: function bind(el, binding, vNode) {
    if (!validate(binding)) { return }

    // Define Handler and cache it on the element
    function handler(e) {
      if (!vNode.context) { return }

      // some components may have related popup item, on which we shall prevent the click outside event handler.
      var elements = e.path || (e.composedPath && e.composedPath());
      elements && elements.length > 0 && elements.unshift(e.target);

      if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) {
        return
      }

      el.__vueClickOutside__.callback(e);
    }

    // add Event Listeners
    el.__vueClickOutside__ = {
      handler: handler,
      callback: binding.value
    };
    !isServer(vNode) && document.addEventListener('click', handler);
  },

  update: function update(el, binding) {
    if (validate(binding)) { el.__vueClickOutside__.callback = binding.value; }
  },

  unbind: function unbind(el, binding, vNode) {
    // Remove Event Listeners
    !isServer(vNode) &&
      document.removeEventListener('click', el.__vueClickOutside__.handler);
    delete el.__vueClickOutside__;
  }
};

var root = window;

function getStyleComputedProperty(element, property) {
  var css = root.getComputedStyle(element);
  return css[property]
}

function getScrollParents(element) {
  var parent = element.parentNode;

  if (!parent) {
    return element
  }

  if (parent === root.document) {
    if (root.document.body.scrollTop || root.document.body.scrollLeft) {
      return root.document.body
    } else {
      return root.document.documentElement
    }
  }

  // prettier-ignore
  if (
    ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow')) > -1 ||
    ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-x')) > -1 ||
    ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-y')) > -1
  ) {
    return parent
  }
  return getScrollParents(element.parentNode)
}

//

var isEmpty = function (val) { return !hasValues(val); };

var script = {
  name: 'SelectWrapper',

  inheritAttrs: false,

  directives: {
    clickOutside: directive
  },

  model: {
    prop: 'value',
    event: 'value-change'
  },

  props: {
    value: {},
    multiple: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    dropdownWidth: {
      type: [Number, String]
    },
    dropdownZIndex: {
      type: Number,
      default: 1000
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: Infinity
    },
    limitText: {
      type: Function,
      default: function (count) { return ("+" + count); }
    },
    popperClass: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: 'Loading...'
    },
    closeOnSelect: {}
  },

  data: function data() {
    return {
      visible: false,
      popupStyle: {},
      scrollParents: []
    }
  },

  computed: {
    isEmptyValue: function isEmptyValue() {
      return isEmpty(this.value)
    },
    popupComputedStyle: function popupComputedStyle() {
      return Object.assign(
        {
          width: parseSizeWithUnit(this.dropdownWidth),
          zIndex: this.dropdownZIndex + 2
        },
        this.popupStyle
      )
    },
    showingValue: function showingValue() {
      if (this.limit > 0) {
        return this.value.slice(0, this.limit)
      }
      return this.value
    },
    internalCloseOnSelect: function internalCloseOnSelect() {
      return this.closeOnSelect !== undefined
        ? this.closeOnSelect
        : !this.multiple
    }
  },

  watch: {
    visible: {
      immediate: true,
      handler: function handler(val) {
        this.visible = val;
      }
    },
    value: function value(val) {
      var this$1 = this;

      this.$emit('change', val);
      this.$nextTick().then(function () {
        if (this$1.appendToBody) {
          this$1.updatePopper();
        }
        if (this$1.internalCloseOnSelect) {
          this$1.hideDropdown();
        }
      });
    }
  },

  created: function created() {
    if (this.multiple && !Array.isArray(this.value)) {
      // eslint-disable-next-line no-console
      console.error(
        '[SelectWrapper error] Expected array with v-model/value in multiple mode, got ' +
          typeof this.value +
          ' with value ' +
          this.value.toString()
      );
    }
  },

  mounted: function mounted() {
    var this$1 = this;

    if (this.appendToBody) {
      document.body.appendChild(this.$refs.popupContainer);

      this.$nextTick().then(function () {
        // All scrollable parents needs to trigger updatePopper() to update the dropdown position
        var loopGetScrollParent = function (parentEle) {
          var parent = parentEle;
          if (
            parentEle === window.document.body ||
            parentEle === window.document.documentElement
          ) {
            parent = window;
          } else {
            loopGetScrollParent(getScrollParents(parent));
          }
          this$1.scrollParents.push(parent);
        };
        loopGetScrollParent(getScrollParents(this$1.$refs.trigger));
        this$1.scrollParents.forEach(function (element) {
          element.addEventListener('scroll', this$1.updatePopper);
        });
        window.addEventListener('resize', this$1.updatePopper);
      });
    }
  },

  beforeDestroy: function beforeDestroy() {
    var this$1 = this;

    this.scrollParents.forEach(function (element) {
      element.removeEventListener('scroll', this$1.updatePopper);
    });
    if (this.appendToBody) {
      var popup = this.$refs.popupContainer;
      popup.parentElement.removeChild(popup);
      window.removeEventListener('resize', this.updatePopper);
    }
  },

  methods: {
    delValue: function delValue(index) {
      if (Array.isArray(this.value)) {
        var newValue = [].concat(
          this.value.slice(0, index),
          this.value.slice(index + 1, this.value.length)
        );
        this.$emit('value-change', newValue);
      }
    },

    clearValue: function clearValue() {
      this.hideDropdown();
      this.$emit('value-change', this.multiple ? [] : undefined);
      this.$emit('clear');
    },

    showDropdown: function showDropdown() {
      if (!this.visible) {
        this.visible = true;
        this.$emit('visible-change', this.visible);
        if (this.appendToBody) {
          this.updatePopper();
        }
      }
    },

    hideDropdown: function hideDropdown() {
      if (this.visible) {
        this.visible = false;
        this.$emit('visible-change', this.visible);
      }
    },

    toggleDropdown: function toggleDropdown() {
      if (this.disabled) { return }
      var newStatus = !this.visible;
      newStatus ? this.showDropdown() : this.hideDropdown();
    },

    getPopupStyle: function getPopupStyle() {
      var triggerBounding = this.$refs.trigger.getBoundingClientRect();
      var offsetLeft = triggerBounding.left + window.scrollX;
      var offsetTop = triggerBounding.bottom + window.scrollY;
      return {
        left: (offsetLeft + "px"),
        top: (offsetTop + "px"),
        width: this.dropdownWidth
          ? ((this.dropdownWidth) + "px")
          : ((triggerBounding.width) + "px")
      }
    },

    updatePopper: function updatePopper() {
      if (this.visible) {
        this.popupStyle = this.getPopupStyle();
      }
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) { style.element.setAttribute('media', css.media); }

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) { style.element.removeChild(nodes[index]); }
      if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }else { style.element.appendChild(textNode); }
    }
  }
}

var browser = createInjector;

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _obj;
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "click-outside",
          rawName: "v-click-outside",
          value: _vm.hideDropdown,
          expression: "hideDropdown"
        }
      ],
      class: ((_obj = {
        sw__wrapper: true,
        "sw__wrapper--active": _vm.visible,
        "sw__wrapper--disabled": _vm.disabled
      }),
      (_obj["sw__wrapper--" + _vm.size] = _vm.size),
      _obj)
    },
    [
      _c(
        "div",
        {
          ref: "trigger",
          staticClass: "sw__trigger",
          on: { click: _vm.toggleDropdown }
        },
        [
          _c(
            "div",
            { ref: "trigger", staticClass: "sw__selection" },
            [
              _vm.isEmptyValue
                ? _c("div", { staticClass: "sw__placeholder" }, [
                    _vm._v(_vm._s(_vm.placeholder))
                  ])
                : [
                    _vm.multiple
                      ? _c(
                          "div",
                          { staticClass: "sw__multiple" },
                          [
                            _vm._l(_vm.showingValue, function(row, index) {
                              return _c(
                                "div",
                                { key: index, staticClass: "sw__tag" },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "sw__tag-text" },
                                    [
                                      _vm._t(
                                        "value-template",
                                        [_vm._v(_vm._s(row))],
                                        { value: row }
                                      )
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  !_vm.disabled
                                    ? _c(
                                        "span",
                                        {
                                          staticClass: "sw__tag-del",
                                          on: {
                                            click: function($event) {
                                              $event.stopPropagation();
                                              return _vm.delValue(index)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "sw__icon-close"
                                          })
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              )
                            }),
                            _vm._v(" "),
                            _vm.limit && _vm.value.length > _vm.limit
                              ? _c(
                                  "div",
                                  { staticClass: "sw__tag sw__tag-limit" },
                                  [
                                    _vm._v(
                                      "\n            " +
                                        _vm._s(
                                          _vm.limitText(
                                            _vm.value.length - _vm.limit
                                          )
                                        ) +
                                        "\n          "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ],
                          2
                        )
                      : _c("div", { staticClass: "sw__single" }, [
                          _c(
                            "div",
                            { staticClass: "sw__tag-text" },
                            [
                              _vm._t(
                                "value-template",
                                [_vm._v(_vm._s(_vm.value))],
                                { value: _vm.value }
                              )
                            ],
                            2
                          )
                        ])
                  ]
            ],
            2
          ),
          _vm._v(" "),
          !_vm.disabled
            ? _c("div", { staticClass: "sw__suffix" }, [
                _c("i", { staticClass: "sw__icon-arrow-down" }),
                _vm._v(" "),
                _vm.clearable && !_vm.isEmptyValue
                  ? _c(
                      "span",
                      {
                        staticClass: "sw__clear",
                        on: {
                          click: function($event) {
                            $event.stopPropagation();
                            return _vm.clearValue($event)
                          }
                        }
                      },
                      [_c("i", { staticClass: "sw__icon-close" })]
                    )
                  : _vm._e()
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "sw__dropdown-trans" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.visible,
                expression: "visible"
              }
            ],
            ref: "popupContainer",
            class: ["sw__dropdown", _vm.popperClass],
            style: _vm.popupComputedStyle,
            on: {
              click: function($event) {
                $event.stopPropagation();
              }
            }
          },
          [
            _vm.loading
              ? _c("div", { staticClass: "sw__loading" }, [
                  _vm._v(_vm._s(_vm.loadingText))
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.loading,
                    expression: "!loading"
                  }
                ]
              },
              [_vm._t("default")],
              2
            )
          ]
        )
      ])
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-32e7cc98_0", { source: "/**\n * wrapper layout\n */\n.sw__wrapper {\n  position: relative;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n.sw__trigger {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  background-color: #fff;\n  background-image: none;\n  border-radius: 4px;\n  border: 1px solid #dcdfe6;\n  -webkit-transition: border 0.2s;\n  transition: border 0.2s;\n  cursor: pointer;\n}\n.sw__trigger:hover {\n  border-color: #c0c4cc;\n}\n.sw__selection {\n  padding: 7px 0 7px 8px;\n  min-height: 24px;\n  line-height: 24px;\n  font-size: 14px;\n}\n.sw__placeholder {\n  color: #999;\n  padding-left: 0.4em;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.sw__selection {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.sw__suffix {\n  width: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.sw__clear {\n  background-color: #fff;\n  position: absolute;\n  display: none;\n}\n.sw__wrapper:hover .sw__clear {\n  display: block;\n}\n.sw__multiple {\n  line-height: 1;\n  margin-top: -4px;\n}\n.sw__tag {\n  position: relative;\n  margin: 4px 4px 0 0;\n  background-color: #f0f2f5;\n  border-radius: 4px;\n  color: #999;\n  font-size: 14px;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 8px;\n  display: inline-block;\n  white-space: nowrap;\n  max-width: calc(100% - 34px);\n  vertical-align: top;\n  cursor: default;\n}\n.sw__tag-text {\n  display: inline-block;\n  vertical-align: top;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.sw__tag-del {\n  display: inline-block;\n  vertical-align: top;\n  padding-left: 4px;\n}\n.sw__tag-del .sw__icon-close {\n  vertical-align: middle;\n  background-color: #999;\n  border-color: #f0f2f5;\n  -webkit-transform: translateY(-1px);\n          transform: translateY(-1px);\n}\n.sw__tag-del .sw__icon-close::before,\n.sw__tag-del .sw__icon-close::after {\n  background-color: #fff;\n}\n.sw__tag-limit {\n  font-size: 12px;\n}\n.sw__single {\n  color: #333;\n  padding-left: 6px;\n}\n.sw__single__option-text {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.sw__icon-arrow-down {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  margin-top: -4px;\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  border: solid #c0c0c0;\n  border-width: 0 0 1px 1px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.sw__icon-close {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  border: 1px solid #999;\n  width: 12px;\n  height: 12px;\n  border-radius: 12px;\n  opacity: 0.6;\n}\n.sw__icon-close:hover {\n  opacity: 1;\n}\n.sw__icon-close::before,\n.sw__icon-close::after {\n  content: '';\n  position: absolute;\n  width: 8px;\n  height: 1px;\n  background-color: #999;\n  left: 50%;\n  top: 50%;\n  margin-left: -4px;\n}\n.sw__icon-close::before {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.sw__icon-close::after {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n/** wrapper size */\n.sw__wrapper--mini .sw__selection {\n  min-height: 20px;\n  line-height: 20px;\n  font-size: 12px;\n}\n.sw__wrapper--mini .sw__multiple {\n  margin-top: -2px;\n}\n.sw__wrapper--mini .sw__tag {\n  margin-top: 2px;\n  height: 20px;\n  line-height: 20px;\n  font-size: 12px;\n}\n.sw__wrapper--mini .sw__selection {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  padding-left: 3px;\n}\n.sw__wrapper--small .sw__selection {\n  min-height: 20px;\n  line-height: 20px;\n  font-size: 12px;\n}\n.sw__wrapper--small .sw__multiple {\n  margin-top: -4px;\n}\n.sw__wrapper--small .sw__tag {\n  margin-top: 4px;\n  height: 20px;\n  line-height: 20px;\n  font-size: 12px;\n}\n.sw__wrapper--small .sw__selection {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n}\n.sw__wrapper--medium .sw__selection {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n}\n/**\n * wrapper status\n */\n.sw__wrapper--active .sw__icon-arrow-down {\n  -webkit-transform: rotate(135deg);\n          transform: rotate(135deg);\n  margin-top: 4px;\n}\n.sw__wrapper--disabled .sw__trigger {\n  background-color: #f5f7fa;\n  border-color: #e4e7ed;\n  color: #c0c4cc;\n  cursor: not-allowed;\n}\n.sw__wrapper--disabled .sw__trigger:hover {\n  border-color: #e4e7ed;\n}\n.sw__wrapper--disabled .sw__multiple .sw__tag {\n  padding: 0 8px;\n  background-color: #f0f2f5;\n  color: #909399;\n}\n.sw__loading {\n  padding: 10px;\n  font-size: 14px;\n  color: #999;\n  text-align: center;\n}\n/**\n * dropdown container\n */\n.sw__dropdown {\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  border: 1px solid #e4e7ed;\n  border-radius: 4px;\n  background-color: #fff;\n  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 5px 0 0;\n}\n.sw__dropdown-trans-enter-active,\n.sw__dropdown-trans-leave-active {\n  opacity: 1;\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n  -webkit-transition: opacity 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n  transition: opacity 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1), opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1), opacity 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-transform-origin: center top;\n          transform-origin: center top;\n}\n.sw__dropdown-trans-enter,\n.sw__dropdown-trans-leave-active {\n  opacity: 0;\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n}\n", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var SelectWrapper = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  );

SelectWrapper.install = function(Vue) {
  Vue.component(SelectWrapper.name, SelectWrapper);
};

if (typeof window !== 'undefined' && window.Vue) {
  SelectWrapper.install(window.Vue);
}

var vueSelectWrapper_common = SelectWrapper;

/**
 * 日期格式化 日期 -> 字符串
 * @param dateOrDatestr
 * @param fmt 'yyyy-MM-dd hh:mm:ss'
 * @returns {*}
 */

function formatDate(dateOrDatestr, fmt) {
  if ( fmt === void 0 ) fmt = 'yyyy-MM-dd';

  if (!dateOrDatestr) {
    return
  }
  var date;
  if (!(dateOrDatestr instanceof Date)) {
    date = strToDate(dateOrDatestr);
  } else {
    date = dateOrDatestr;
  }
  if (fmt === 'timestamp') {
    return date.getTime()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }
  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (var k in o) {
    if (new RegExp(("(" + k + ")")).test(fmt)) {
      var str = o[k] + '';
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }

  function padLeftZero(str) {
    return ('00' + str).substr(str.length)
  }

  return fmt
}

/**
 * 字符串转换为时间
 * @param  {String} src 字符串
 */
function strToDate(src) {
  if (typeof src === 'number') {
    return autoParseDate(src)
  }
  return src ? autoParseDate(src.replace(/-/g, '/')) : new Date()
}

// 测试是否是pc的chrome浏览器
var isChrome = (function () {
  var u = navigator.userAgent;
  if (
    u.match(/Chrome/i) &&
    u.match(/Windows/i) &&
    !u.match(/Mobile/i) &&
    !u.match(/Wechat/i)
  ) {
    return true
  }
  return false
})();
// 拓展Date对象
var autoParseDate = function () {
  var agu = [], len = arguments.length;
  while ( len-- ) agu[ len ] = arguments[ len ];

  if (agu.length === 1 && typeof agu[0] === 'string') {
    var agu1 = agu[0].replace(/-/g, '/');
    return new Date(agu1)
  } else {
    return new (Function.prototype.bind.apply( Date, [ null ].concat( agu) ))
  }
};

function getYear(date) {
  return typeof date === 'string'
    ? autoParseDate(date).getFullYear()
    : date.getFullYear()
}

function getQuarter(date) {
  var _date = typeof date === 'string'
    ? autoParseDate(date)
    : date;
  return (parseInt((_date.getMonth() + 1) / 3, 10) + 1  )
}

//

var script$1 = {
  name: 'QuarterSelect',

  components: {
    VueSelectWrapper: vueSelectWrapper_common
  },

  model: {
    prop: 'value',
    event: 'done'
  },

  props: {
    value: {
      type: [Array, String]
    },
    valueFormat: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    placeholder: {
      type: String,
      default: '请选择季度'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    minDate: {
      type: [String, Date]
    },
    maxDate: {
      type: [String, Date]
    },
    format: {
      type: Function,
      // eslint-disable-next-line
      default: function(year, quarter, date) {
        return (year + "年 第" + quarter + "季度")
      }
    },
    selectItems: {
      type: Array,
      default: function () { return ['第一季度', '第二季度', '第三季度', '第四季度']; }
    },
    defaultValue: {
      type: Date
    }
  },

  data: function data() {
    return {
      formatValue: '',
      year: new Date().getFullYear(),
      selectedYear: new Date().getFullYear(),
      selectedQuarter: ''
    }
  },

  computed: {
    formatSelectItems: function formatSelectItems() {
      return this.selectItems.map(function (item, index) { return ({
        key: item,
        value: index + 1
      }); })
    }
  },

  mounted: function mounted() {
    // 保留组件传递进来的初始值，于清空时设置其初始值
    this.originValue = typeof this.value === 'string' ? '' : [];
    if (this.defaultValue) {
      this.year = getYear(this.defaultValue);
      this.setDate(getQuarter(this.defaultValue));
    }
    this.$refs.selectWrapper && (this.selectWrapper = this.$refs.selectWrapper);
  },

  methods: {
    isSelected: function isSelected(quarter) {
      if (this.year === this.selectedYear && quarter === this.selectedQuarter) {
        return true
      }
      return false
    },
    // 设置禁用项
    isDisabled: function isDisabled(quarter) {
      var minQuarter = this.minDate && getQuarter(this.minDate);
      var maxQuarter = this.maxDate && getQuarter(this.maxDate);
      var minYear = this.minDate && getYear(this.minDate);
      var maxYear = this.maxDate && getYear(this.maxDate);
      var curYear = +this.year;
      // 只设置最小日期
      if (this.minDate && !this.maxDate) {
        if (minYear > curYear) {
          return true
        }
        if (minYear === curYear && quarter < minQuarter) {
          return true
        }
        return false
      }
      // 只设置最大日期
      if (this.maxDate && !this.minDate) {
        if (maxYear < curYear) {
          return true
        }
        if (maxYear === curYear && quarter > maxQuarter) {
          return true
        }
        return false
      }
      // 同时设置最小和最大日期
      if (this.minDate && this.maxDate) {
        if (minYear > curYear || maxYear < curYear) {
          return true
        }
        if (
          (minYear === curYear && quarter < minQuarter) ||
          (maxYear === curYear && quarter > maxQuarter)
        ) {
          return true
        }
        return false
      }
      // 最小日期和最大日期都不设置
      return false
    },

    // 转换输入框显示的内容
    transformValue: function transformValue(quarter, date) {
      this.formatValue = this.format(this.year, quarter, date);
    },

    setDate: function setDate(quarter) {
      var beginDate = autoParseDate(this.year, (quarter - 1) * 3);
      var endDate = autoParseDate(
        beginDate.getFullYear(),
        beginDate.getMonth() + 3,
        beginDate.getDate() - 1
      );
      // 根据value-format转化时间格式
      var date = [
        formatDate(beginDate, this.valueFormat),
        formatDate(endDate, this.valueFormat)
      ];
      // 选择后保存选中的年份和季度
      this.selectedYear = this.year;
      this.selectedQuarter = quarter;
      this.transformValue(quarter, date);
      this.$emit('done', date);
    },

    clear: function clear() {
      this.selectedQuarter = '';
      this.formatValue = '';
      this.$emit('done', this.originValue);
    }
  }
};

function normalizeComponent$1(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1$1 = normalizeComponent$1;

var isOldIE$1 = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector$1(context) {
  return function (id, style) {
    return addStyle$1(id, style);
  };
}
var HEAD$1;
var styles$1 = {};

function addStyle$1(id, css) {
  var group = isOldIE$1 ? css.media || 'default' : id;
  var style = styles$1[group] || (styles$1[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) { style.element.setAttribute('media', css.media); }

      if (HEAD$1 === undefined) {
        HEAD$1 = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD$1.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) { style.element.removeChild(nodes[index]); }
      if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }else { style.element.appendChild(textNode); }
    }
  }
}

var browser$1 = createInjector$1;

/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "VueSelectWrapper",
    _vm._g(
      _vm._b(
        {
          ref: "selectWrapper",
          attrs: { placeholder: _vm.placeholder, clearable: _vm.clearable },
          on: { clear: _vm.clear },
          model: {
            value: _vm.formatValue,
            callback: function($$v) {
              _vm.formatValue = $$v;
            },
            expression: "formatValue"
          }
        },
        "VueSelectWrapper",
        _vm.$attrs,
        false
      ),
      _vm.$listeners
    ),
    [
      _c("div", { staticClass: "quarter" }, [
        _c("div", { staticClass: "quarter__header" }, [
          _c("button", {
            staticClass: "iconfont icon-prev",
            class: { quarter__button_disabled: false },
            on: {
              click: function($event) {
                _vm.year--;
              }
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "quarter__header-label" }, [
            _vm._v(_vm._s(_vm.year) + "年")
          ]),
          _vm._v(" "),
          _c("button", {
            staticClass: "iconfont icon-next",
            class: { quarter__button_disabled: false },
            on: {
              click: function($event) {
                _vm.year++;
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "quarter__list" },
          _vm._l(_vm.formatSelectItems, function(item) {
            return _c(
              "li",
              {
                key: item.value,
                class: [
                  "quarter__item",
                  _vm.isDisabled(item.value) ? "disabled" : "",
                  _vm.isSelected(item.value) ? "selected" : ""
                ],
                on: {
                  click: function($event) {
                    !_vm.isDisabled(item.value) && _vm.setDate(item.value);
                  }
                }
              },
              [_vm._v(_vm._s(item.key))]
            )
          }),
          0
        )
      ])
    ]
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  var __vue_inject_styles__$1 = function (inject) {
    if (!inject) { return }
    inject("data-v-2b0ffeae_0", { source: "/**\r\n *  quarter-selector layout\r\n */\r\n.quarter__header {\r\n  padding-bottom: 12px;\r\n  border-bottom: 1px solid #ebeef5;\r\n  margin: 12px 12px 0 12px;\r\n  text-align: center;\r\n}\r\n\r\n.quarter__button_disabled {\r\n  cursor: not-allowed !important;\r\n}\r\n\r\n.iconfont {\r\n  width: 12px;\r\n  height: 12px;\r\n  border: 0;\r\n  background: transparent;\r\n  cursor: pointer;\r\n  outline: none;\r\n  margin-top: 5px;\r\n}\r\n\r\n.icon-prev {\r\n  float: left;\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAzUlEQVQoU3XRMUpDQRCH8V9IYWltHfACdoKksrORiJAUIRYJglqJBFIktY2tAWsvkBsEIYE09kEP4Q1kYBeWsG+6N/N9+/6z29JcXayL8Sn2rQY+4Bs8pfkC31jVhIDvMCrgH3zG96EQcIAhRE3xh2VOUgrnCRyn4QRtvJexs3CGAO/T8BbH+DjcMQsXmOMyAUO84qRJiH5EesF1gvrppnq1SLkXUsSKP0Q94AhvtaVLaYDH1HjGBtvatZbSFWaFtMNX00vnneLkXB38/gP9Wh0NSXyxKwAAAABJRU5ErkJggg==);\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.icon-next {\r\n  float: right;\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAABLElEQVQoU22SvUoDQRDHZ+4FfAjF9m52LwED4hv4AtZCbAVBCAiWFqnURhs7QVT8AAURQiwsvI/ZLdII1taWFrmRvY94yd02u3/4/XZm2EUAAK31cpIkX+7sVhB0esZE71Wu7+iCUmpdBLvMydBlIn0g4r22SblQQLQG4PUqKVDhADIcLUozwUk+6V1E+TVpelpW2hfx3urSnFBI4Y0HcM0cXxbzqD1EGTFz7HJDKCt9o2DfmPg+l1Q4kCneWRtNWoUgUNsi8GNtelW2NgTAMXP80BCI9E6GMrVpelbefoICLw5utESk+xnAkuXkKIdJnyPgYwXPCYFSW5DBijHpYQlfIOBtHZ4JROGmSEYVTKSOAbwn5vh58bXzGXy/u2rtx+f/I3Y2mKNx29f4A2rdhQ0Ah41XAAAAAElFTkSuQmCC);\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.quarter__header-label {\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  padding: 0 5px;\r\n  line-height: 22px;\r\n  text-align: center;\r\n  cursor: default;\r\n  color: #606266;\r\n}\r\n\r\n.quarter__list {\r\n  list-style: none;\r\n  padding: 6px 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n}\r\n\r\n.quarter__item {\r\n  font-size: 14px;\r\n  padding: 0 20px;\r\n  position: relative;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  color: #606266;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  box-sizing: border-box;\r\n  cursor: pointer;\r\n}\r\n\r\n.quarter__item:hover {\r\n  background-color: #f5f7fa;\r\n}\r\n.quarter__item.selected {\r\n  color: #409eff;\r\n  font-weight: 700;\r\n}\r\n\r\n.quarter__item.disabled {\r\n  color: #c0c4cc;\r\n  cursor: not-allowed;\r\n}\r\n", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  

  
  var VueQuarterSelect = normalizeComponent_1$1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    browser$1,
    undefined
  );

VueQuarterSelect.install = function (Vue) {
  Vue.component('VueQuarterSelect', VueQuarterSelect);
  Vue.component('vue-quarter-select', VueQuarterSelect);
};

if (typeof window !== 'undefined' && window.Vue) {
  VueQuarterSelect.install(window.Vue);
}

export default VueQuarterSelect;
