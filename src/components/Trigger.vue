<template>
  <div :class="{
    qs__trigger: true,
    'qs__trigger--focus': isFocus,
    'qs__trigger--disabled': disabled,
    [`qs__trigger--${size}`]: !!size
  }">
    <div class="qs__trigger__wrap" @click="toggleFocus">
      <slot name="prefix">
        <span class="qs__icon qs__icon--prefix">
          <icon><icon-calendar/></icon>
        </span>
      </slot>

      <div class="qs__trigger__content">
        <div v-if="isEmpty" class="qs__placeholder">{{ placeholder }}</div>
        <template v-else>
          <div class="qs__selection">
            <div v-if="multiple" class="qs__multiple">
              <span
                v-for="(tag, index) in values"
                class="qs__tag"
                :key="tag"
              >
                <span class="qs__tag__content">{{ tag }}</span>
                <span class="qs__icon qs__icon--close" @click.stop="removeTag(index)">
                  <icon><icon-close /></icon>
                </span>
              </span>

              <span class="qs__tag" v-if="showLimit">
                <span class="qs__tag__content">{{ limitText(value.length - limit) }}</span>
              </span>
            </div>
            <div v-else class="qs__single">
              {{ value }}
            </div>
          </div>
        </template>
      </div>

      <slot v-if="$scopedSlots.suffix" name="suffix">
        <span class="qs__icon qs__icon--suffix"></span>
      </slot>

      <span
        v-if="showClear"
        class="qs__icon qs__icon--clear"
        @click.stop="clear"
      >
        <icon><icon-circle-close /></icon>
      </span>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import IconClose from '@/components/icons/IconClose.vue'
import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconCircleClose from '@/components/icons/IconCircleClose.vue'

export default {
  name: 'VueQuarterTrigger',

  components: {
    Icon,
    IconClose,
    IconCalendar,
    IconCircleClose
  },

  props: {
    /** 是否聚焦 */
    isFocus: {
      type: Boolean
    },
    /** 显示在输入框中的格式 */
    value: {
      type: [String, Array]
    },
    /** 输入框占位文本 */
    placeholder: {
      type: String,
      default: '请选择季度'
    },
    /** 是否可清空 */
    clearable: {
      type: Boolean,
      default: true
    },
    /** 输入框尺寸 */
    size: {
      type: String,
      default: ''
    },
    /** 是否禁用 */
    disabled: {
      type: Boolean,
      default: false
    },
    /** 是否多选 */
    multiple: {
      type: Boolean,
      default: false
    },
    /** 限制所选选项的显示。其余的将隐藏在limitText 字符串中 */
    limit: {
      type: Number,
      default: 0
    },
    /** 当所选元素超过定义的限制时处理显示的消息的功能 */
    limitText: {
      type: Function,
      default: count => `+${count}`
    }
  },

  computed: {
    showClear() {
      return !this.disabled && !this.isEmpty && this.clearable
    },
    showLimit() {
      return this.limit &&  this.value.length > this.limit
    },
    isEmpty() {
      return !this.value || this.value && !this.value.length
    },
    values() {
      if (this.limit) {
        return this.value.slice(0, this.limit)
      }
      return this.value
    }
  },

  methods: {
    toggleFocus() {
      if (!this.disabled) this.$emit('focus')
    },
    removeTag(index) {
      this.$emit('remove', index)
    },
    clear() {
      this.$emit('clear')
    }
  }
}
</script>

<style lang="less" scoped>
.qs-size-factory(@height: var(--qs-height-medium), @padding: var(--qs-padding-medium)) {
  .qs__trigger__wrap {
    min-height: calc(@height - 2px);
    line-height: calc(@height - 2px);
    padding: @padding;
  }
}

.qs__trigger {
  width: 100%;
  height: 100%;
  border-radius: var(--qs-border-radius);
  box-shadow: 0 0 0 1px var(--qs-border-color) inset;
  box-sizing: border-box;
  transition: all 0.2s;
  cursor: pointer;

  .qs-size-factory(var(--qs-height-medium), var(--qs-padding-medium));

  .qs__trigger__wrap {
    display: flex;
    flex-grow: 1;
    align-items: center;
  }

  .qs__trigger__content {
    flex: 1;
    padding: 0 8px;
  }

  .qs__placeholder {
    font-size: var(--qs-font-size);
    color: var(--qs-text-color-placeholder);
  }

  .qs__multiple {
    display: flex;
    flex-wrap: wrap;

    .qs__tag {
      display: flex;
      align-items: center;
      padding: 0 8px;
      border-radius: var(--qs-border-radius);
      margin: 2px 6px 2px 0;
      font-size: var(--qs-font-size);
      color: var(--qs-text-color-info);
      background-color: #f0f2f5;

      .qs__icon--close {
        display: flex;
        margin-left: 4px;
        border-radius: 50%;

        svg {
          padding: 1px;
          font-size: calc(var(--qs-font-size) - 2px);
        }

        &:hover {
          color: var(--qs-text-color-white);
          background-color: var(--qs-text-color-info);
        }
      }
    }
  }

  .qs__single {
    font-size: var(--qs-font-size);
    color: var(--qs-text-color);
  }

  .qs__icon {
    color: var(--qs-text-color-placeholder);
  }

  .qs__icon--clear {
    display: none;
  }

  &:hover {
    .qs__icon--clear {
      display: inline-flex;
    }
  }

  &--focus {
    box-shadow: 0 0 0 1px var(--qs-border-color-focus) inset;
  }

  &--disabled {
    cursor: not-allowed;
    background-color: var(--qs-bg-color-disabled);
    box-shadow: 0 0 0 1px var(--qs-border-color-disabled) inset;
  }

  &--large {
    min-height: var(--qs-height-large);
    .qs-size-factory(@height: var(--qs-height-large), @padding: var(--qs-padding-large))
  }

  &--medium {
    min-height: var(--qs-height-medium);
    .qs-size-factory(@height: var(--qs-height-medium), @padding: var(--qs-padding-medium))
  }

  &--small {
    min-height: var(--qs-height-small);
    .qs-size-factory(@height: var(--qs-height-small), @padding: var(--qs-padding-small))
  }

}
</style>
