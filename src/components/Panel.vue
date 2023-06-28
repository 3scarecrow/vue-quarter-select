<template>
  <div class="qs__panel">
    <div class="qs__header">
      <span class="qs__place" @click="decreaseYear">
        <slot name="prev-icon">
          <span class="qs__icon qs__icon--prev">
            <icon><icon-db-left /></icon>
          </span>
        </slot>
      </span>
      <span class="qs__header-label">
        <slot name="year" :year="year">
          {{ year }}
        </slot>
      </span>
      <span class="qs__place" @click="increaseYear">
        <slot name="next-icon">
          <span class="qs__icon qs__icon--next">
            <icon><icon-db-right /></icon>
          </span>
        </slot>
      </span>
    </div>

    <ul :class="['qs__dropdown__list', `qs__dropdown__list--${direction}`]">
      <li
        v-for="option in options"
        :key="option.value"
        :class="{
          'qs__dropdown__item': true,
          'qs__dropdown__item--disabled': isDisabled(option.value),
          'qs__dropdown__item--selected': isSelected(option.value)
        }"
        @click="setData(option.value)"
      >
        <slot :option="option">
          {{ option.label }}
        </slot>
      </li>
    </ul>

    <slot name="footer"></slot>
  </div>
</template>

<script>
import {
  isArray,
  isFunction,
  isUndefined,
  formatDate,
  getQuarter,
  generateDates,
  conovertToDate,
} from '@/utils'
import Icon from '@/components/Icon'
import IconDbLeft from '@/components/icons/IconDbLeft.vue'
import IconDbRight from '@/components/icons/IconDbRight.vue'

export default {
  name: 'VueQuarterPanel',

  components: {
    Icon,
    IconDbLeft,
    IconDbRight
  },

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    /** 绑定值 */
    value: {
      type: [Array, String]
    },
    /** 显示在输入框中的格式 */
    format: {
      type: [String, Function],
      default: `yyyy Qq`
    },
    /** 绑定值格式 */
    valueFormat: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    /** 选项格式 */
    optionFormat: {
      type: Function,
      default: (quarter) => `Q${quarter}`
    },
    /** 禁用日期	 */
    disabledDate: {
      type: Function
    },
    /** 选项显示方向 */
    direction: {
      type: String,
      default: 'horizontal'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: [Date, Array]
    },
  },

  data() {
    return {
      year: new Date().getFullYear(),
      singleQuarter: this.createQuarterData(),
      multipleQuarter: []
    }
  },

  computed: {
    options() {
      return Array.from(Array(4).keys()).map((quarter) => ({
        label: this.optionFormat(quarter + 1),
        value: quarter + 1
      }))
    },

    datesOfYear() {
      return generateDates(this.year)
    }
  },

  watch: {
    defaultValue: {
      handler: 'setDefaultValue',
      immediate: true
    }
  },

  methods: {
    increaseYear() {
      this.year++
    },

    decreaseYear() {
      this.year--
    },

    /** 是否选中 */
    isSelected(quarter) {
      const isMatched = item => this.isMatched(item, quarter)
      return this.multiple
        ? this.multipleQuarter.some(isMatched)
        : isMatched(this.singleQuarter)
    },

    /** 是否匹配 */
    isMatched(item, quarter) {
      const { year } = this
      return item.year === year && item.quarter === quarter
    },

    // 设置禁用项
    isDisabled(quarter) {
      const { disabledDate, datesOfYear } = this
      if (!isFunction(disabledDate)) return false
      return datesOfYear
        .slice((quarter - 1) * 3, quarter * 3)
        .reduce((r, v) => r.concat(v), [])
        .every((date) => disabledDate(date))
    },

    /** 设置默认值 */
    setDefaultValue(value) {
      if (!value) {
        this.clear()
        return
      }

      if (this.multiple) {
        if (!isArray(value)) return
        value.forEach(date => this.setMultipleData(getQuarter(date)))
      } else {
        this.setSingleData(getQuarter(value))
      }
    },

    setData(quarter) {
      this.multiple ? this.setMultipleData(quarter) : this.setSingleData(quarter)
    },

    /** 设置单选的季度数据 */
    setSingleData(quarter) {
      const quarterData = this.createQuarterData(quarter)
      this.singleQuarter = { ...this.singleQuarter, ...quarterData }
      this.emitChange()
    },

    /** 设置多选的季度数据 */
    setMultipleData(quarter) {
      const quarterData = this.createQuarterData(quarter)
      const isMatched = item => this.isMatched(item, quarter)
      const isExisted = this.multipleQuarter.some(isMatched)
      // 判断是否已存在于多选数据
      if (isExisted) {
        this.multipleQuarter = this.multipleQuarter.filter(item => {
          return !this.isMatched(item, quarter)
        })
      } else {
        this.multipleQuarter.push(quarterData)
      }
      this.emitChange()
    },

    /** 派发 change 事件 */
    emitChange() {
      const modelValue = this.multiple
        ? this.multipleQuarter.map(item => item.value)
        : this.singleQuarter.value
      const quarterData = this.multiple ? this.multipleQuarter : this.singleQuarter

      this.$emit('change', modelValue, quarterData)
    },

    /** 根据季度创建数据 */
    createQuarterData(quarter) {
      if (isUndefined(quarter)) return {
        format: '',
        year: '',
        quarter: '',
        value: []
      }

      const value = this.transformQuarterToDate(quarter)
      const { year } = this
      const { format: _format } = this
      const date = conovertToDate(year, (quarter - 1) * 3)
      const format = isFunction(_format) ? _format(year, quarter) : formatDate(date, _format)

      return { year, value, quarter, format }
    },

    /** 根据季度转化日期 */
    transformQuarterToDate(quarter) {
      const { year, valueFormat } = this
      const beginDate = conovertToDate(year, (quarter - 1) * 3)
      const endDate = conovertToDate(year, beginDate.getMonth() + 3, 0)
      const formattedBeginDate = formatDate(beginDate, valueFormat)
      const formattedEndDate = formatDate(endDate, valueFormat)
      return [formattedBeginDate, formattedEndDate]
    },

    /** 多选时移除季度数据 */
    remove(index) {
      this.multipleQuarter.splice(index, 1)
      this.emitChange()
    },

    clear() {
      if (this.multiple) {
        this.multipleQuarter = []
      } else {
        this.singleQuarter = this.createQuarterData()
      }
      this.$emit('change', undefined)
    }
  }
}
</script>

<style lang="less" scoped>
.qs__panel {
  border: 1px solid var(--qs-border-color-light);
  border-radius: var(--qs-border-radius);

  .qs__header {
    padding: 12px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    color: var(--qs-text-color);
    border-bottom: solid 1px var(--qs-border-color-light);
  }

  .qs__place {
    cursor: pointer;
  }

  .qs__dropdown__list {
    display: flex;
    list-style: none;
    padding: 10px 16px;
    margin: 0;
    box-sizing: border-box;
    text-align: center;

    .qs__dropdown__item {
      font-size: var(--qs-font-size);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--qs-text-color);
      height: 34px;
      line-height: 34px;
      box-sizing: border-box;
      cursor: pointer;

      &:hover {
        background-color: var(--qs-bg-color-hover);
      }

      &--selected {
        color: var(--qs-bg-color-active);
        font-weight: bold;
      }

      &--disabled {
        color: #c0c4cc;
        cursor: not-allowed;
      }
    }

    &--vertical {
      flex-direction: column;
      padding: 10px 0;
    }

    &--horizontal {
      flex-direction: row;

      .qs__dropdown__item {
        flex: 1;
        border-radius: 24px;
      }
    }
  }
}
</style>
