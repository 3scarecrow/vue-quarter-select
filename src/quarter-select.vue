<template>
  <SelectWrapper
    ref="selectWrapper"
    v-model="formattedValue"
    :multiple="multiple"
    :clearable="clearable"
    :placeholder="placeholder"
    v-bind="$attrs"
    @clear="clear"
  >
    <div class="quarter">
      <div class="quarter__header">
        <span class="quarter__header-icon quarter__header-icon--prev" @click="year--">
          <slot name="header-left">
            <span class="quarter__header-icon--prev-place"></span>
          </slot>
        </span>
        <span class="quarter__header-label">
          <slot name="header-center" :year="year">
            {{ year }}年
          </slot>
        </span>
        <span class="quarter__header-icon quarter__header-icon--next" @click="year++">
          <slot name="header-right">
            <span class="quarter__header-icon--next-place"></span>
          </slot>
        </span>
      </div>
      <ul class="quarter__list">
        <li
          v-for="option in formattedOptions"
          :key="option.value"
          :class="[
            'quarter__list__item',
            {
              'quarter__list__item--disabled': isDisabled(option.value),
              'quarter__list__item--selected': isSelected(option.value)
            }
          ]"
          @click="!isDisabled(option.value) && setData(option.value)"
        >
          <slot :option="option">
            {{ option.label }}
          </slot>
        </li>
      </ul>
    </div>
  </SelectWrapper>
</template>

<style lang="less" src="./style.less">
</style>

<script>
import SelectWrapper from '@laomao800/vue-select-wrapper'
import {
  is,
  conovertToDate,
  formatDate,
  // getYear,
  getQuarter,
  generateDates
} from '@/utils'

export default {
  name: 'QuarterSelect',

  components: {
    SelectWrapper
  },

  inheritAttrs: false,

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    value: { },
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
      default: function (year, quarter, date) {
        return `${year}年 第${quarter}季度`
      }
    },
    dropdownOptions: {
      type: Array,
      default: () => ['第一季度', '第二季度', '第三季度', '第四季度']
    },
    defaultValue: {
      type: [Date, Array]
    },
    multiple: {
      type: Boolean,
      default: false
    },
    /** 禁用日期 */
    disabledDate: {
      type: Function
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
    // 格式化下拉选项
    formattedOptions() {
      return this.dropdownOptions.map((item, index) => ({
        label: item,
        value: index + 1
      }))
    },
    // 格式化输入框展示值
    formattedValue() {
      return this.multiple
        ? this.multipleQuarter.map(item => item.format)
        : this.singleQuarter.format
    },

    datesOfYear() {
      return generateDates(this.year)
    }
  },

  mounted() {
    this.$refs.selectWrapper && (this.selectWrapper = this.$refs.selectWrapper)
  },

  watch: {
    defaultValue: 'setDefaultValue',
  },

  methods: {
    isSelected(quarter) {
      const hasMatchedItem = item => this.hasMatchedItem(item, quarter)
      return this.multiple
        ? this.multipleQuarter.some(hasMatchedItem)
        : hasMatchedItem(this.singleQuarter)
    },

    hasMatchedItem(item, quarter) {
      const { year } = this
      return item.year === year && item.quarter === quarter
    },

    // 设置禁用项
    isDisabled(quarter) {
      const { disabledDate, datesOfYear } = this
      if (!is(disabledDate, 'Function')) return false
      return datesOfYear
        .slice((quarter - 1) * 3, quarter * 3)
        .reduce((r, v) => r.concat(v), [])
        .every((date) => disabledDate(date))
    },

    setDefaultValue(value) {
      if (!value) {
        this.clear()
        return
      }

      if (this.multiple) {
        if (!is(value, 'Array')) return
        value.forEach(date => this.setMultipleData(getQuarter(date)))
      } else {
        this.setSingleData(value)
      }
    },

    setData(quarter) {
      this.multiple ? this.setMultipleData(quarter) : this.setSingleData(quarter)
    },

    setSingleData(quarter) {
      const quarterData = this.createQuarterData(quarter)
      this.singleQuarter = { ...this.singleQuarter, ...quarterData }
      this.emitChange()
    },

    setMultipleData(quarter) {
      const quarterData = this.createQuarterData(quarter)
      const hasMatchedItem = item => this.hasMatchedItem(item, quarter)
      const isExistItem = this.multipleQuarter.some(hasMatchedItem)
      if (isExistItem) {
        this.multipleQuarter = this.multipleQuarter.filter(item => {
          return !this.hasMatchedItem(item, quarter)
        })
      } else {
        this.multipleQuarter.push(quarterData)
      }
      this.emitChange()
    },

    emitChange() {
      const emittedValue = this.multiple
        ? this.multipleQuarter.map(item => item.value)
        : this.singleQuarter.value
      this.$emit('change', emittedValue)
    },

    createQuarterData(quarter) {
      if (is(quarter, 'Undefined')) return {
        format: '',
        year: '',
        quarter: '',
        value: []
      }
      const value = this.transformQuarterToDate(quarter)
      const { year } = this
      const format = this.format(year, quarter)
      return { year, value, quarter, format }
    },

    /**
     * 根据季度转化日期
     * @param {Number} quarter 季度
     */
    transformQuarterToDate(quarter) {
      const { year, valueFormat } = this
      const beginDate = conovertToDate(year, (quarter - 1) * 3)
      const endDate = conovertToDate(year, beginDate.getMonth() + 3, 0)
      const formattedBeginDate = formatDate(beginDate, valueFormat)
      const formattedEndDate = formatDate(endDate, valueFormat)
      return [formattedBeginDate, formattedEndDate]
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
