<template>
  <div class="qs">
    <Trigger
      v-click-outside="hidePopper"
      ref="trigger"
      :is-focus="isFocus"
      :value="formattedValue"
      v-bind="triggerProps"
      @focus="togglePopper"
      @clear="clear"
      @remove="remove"
    >
      <template v-for="(_, name) in $slots" v-slot:[name]="scoped">
        <slot :name="name" v-bind="scoped"></slot>
      </template>
    </Trigger>
    <div
      ref="popper"
      v-show="isFocus"
      class="qs__popper"
      :style="popperStyle"
      @click.stop
    >
      <Panel
        ref="panel"
        :value.sync="value"
        v-bind="panelProps"
        @change="handleChange"
      >
        <template v-for="(_, name) in $slots" v-slot:[name]="scoped">
          <slot :name="name" v-bind="scoped"></slot>
        </template>
      </Panel>
      <div class="qs__arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script>
import vClickOutside from '@/directives/ClickOutside'
import { createPopper } from '@popperjs/core'
import Panel from '@/components/Panel.vue'
import Trigger from '@/components/Trigger.vue'
import { pick, omit, mapKey, kebabCase } from '@/utils'

const triggerKeys = [
  'size',
  'disabled',
  'clearable',
  'limit',
  'limit-text',
  'placeholder',
]

const _createPopper = (referenceElement, popperElement, options) => {
  const defaultOptions = {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 12],
        }
      }
    ]
  }
  const finalOptions = Object.assign({}, defaultOptions, options)
  return createPopper(referenceElement, popperElement, finalOptions)
}

export default {
  name: 'QuarterSelect',

  model: {
    prop: 'value',
    event: 'change'
  },

  components: {
    Trigger,
    Panel
  },

  directives: { clickOutside: vClickOutside },

  props: {
    value: {
      type: [Array, String]
    },
    /** 是否添加到 body */
    appendToBody: {
      type: Boolean,
      default: true
    },
    /** 下拉框的宽度 */
    popperWidth: {
      type: Number,
    },
    /** 下拉框的 z-index */
    popperZIndex: {
      type: Number,
      default: 1000
    },
    /** 下拉框的出现位置 */
    placement: {
      type: String,
      default: 'auto'
    },
    /** 是否多选 */
    multiple: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isFocus: false,
      triggerWidth: null,
      formattedValue: '',
    }
  },

  computed: {
    normalizedAttrs() {
      const attrs = { ...this.$attrs, multiple: this.multiple }
      return mapKey(attrs, (_, key) => kebabCase(key))
    },
    /** 触发器组件 Props */
    triggerProps() {
      return pick(this.normalizedAttrs, [...triggerKeys, 'multiple'])
    },
    /** 面板组件 Props */
    panelProps() {
      return omit(this.normalizedAttrs, triggerKeys)
    },
    popperStyle () {
      return {
        width: this.popperWidth || this.triggerWidth + 'px',
        zIndex: this.popperZIndex
      }
    }
  },

  mounted() {
    const { trigger } = this.$refs
    if (trigger) {
      this.triggerWidth = trigger.$el.getBoundingClientRect().width
    }
  },

  methods: {
    /**
     * 添加 popper 到 body
     */
    appendPopper() {
      const { popper } = this.$refs
      if (popper && this.appendToBody) {
        document.body.appendChild(popper)
      }
    },

    /**
     * 删除 popper 从 body
     */
    removePopper() {
      const { popper } = this.$refs
      if (popper && this.appendToBody && !document.body.contains(popper)) {
        document.body.removeChild(popper)
      }
    },

    togglePopper() {
      this.isFocus ? this.hidePopper() : this.showPopper()
    },

    /**
     * 显示下拉
     */
    showPopper() {
      this.setFocusState(true)
      const { trigger, popper } = this.$refs

      if (!trigger || !popper) return

      this.popperInstance = _createPopper(trigger.$el, popper, {
        placement: this.placement
      })
      this.appendPopper()
    },

    /**
     * 隐藏下拉
     */
    hidePopper() {
      if (this.popperInstance) {
        this.setFocusState(false)
        this.popperInstance.destroy()
        this.popperInstance = null
        this.removePopper()
      }
    },

    /**
     * 设置聚焦状态
     * @param state 是否聚焦
     */
    setFocusState(state) {
      this.isFocus = state
      this.$emit('visible-change', state)
    },

    /**
     * 处理季度面板组件选中值改变
     * @param {Array|Undefined} value 选中值
     * @param {*} quarterData 选中的季度数据
     */
    handleChange(value, quarterData) {
      if (value) {
        this.formattedValue = this.multiple
          ? quarterData.map(item => item.format)
          : quarterData.format
      } else {
        this.formattedValue = this.multiple ? [] : ''
      }
      // 多选模式，选中后无需隐藏 popper
      if (!this.multiple) this.hidePopper()
      this.$emit('change', value, quarterData)
    },

    /**
     * 多选时移除选中值
     * @param {number} index 下标
     */
    remove(index) {
      this.$refs.panel.remove(index)
    },

    /**
     * 清空值
     */
    clear() {
      this.formattedValue = this.multiple ? [] : ''
      this.$refs.panel.clear()
      this.hidePopper()
    }
  }
}
</script>

<style lang="less" scoped>
.qs {
  width: 100%;
  display: inline-flex;
}

.qs__popper {
  transform-origin: center bottom;
  background-color: var(--qs-bg-color-white);
  box-shadow: var(--qs-box-shadow);
  box-sizing: border-box;
}

.qs__arrow,
.qs__arrow::before {
  position: absolute;
  width: 10px;
  height: 10px;
  background: inherit;
}

.qs__arrow {
  visibility: hidden;
}

.qs__arrow::before {
  visibility: visible;
  content: '';
  transform: rotate(45deg);
  border-top: 1px solid var(--qs-border-color-light);
  border-left: 1px solid var(--qs-border-color-light);
}

.qs__popper[data-popper-placement^='top']>.qs__arrow {
  bottom: -5px;
}

.qs__popper[data-popper-placement^='bottom']>.qs__arrow {
  top: -5px;
}

.qs__popper[data-popper-placement^='left']>.qs__arrow {
  right: -5px;
}

.qs__popper[data-popper-placement^='right']>.qs__arrow {
  left: -5px;
}
</style>
