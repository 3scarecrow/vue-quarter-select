<template>
  <VueSelectWrapper
    ref="selectWrapper"
    v-model="formatValue"
    :placeholder="placeholder"
    :clearable="clearable"
    v-bind="$attrs"
    v-on="$listeners"
    @clear="clear"
  >
    <div class="quarter">
      <div class="quarter__header">
        <span
          class="quarter__header-icon quarter__header-icon--prev"
          @click="year--"
        >
          <slot name="header-left">
            <img src="./assets/prev.png">
          </slot>
        </span>
        <span class="quarter__header-label">
          <slot name="header-center" :year="year">
            {{ year }}年
          </slot>
        </span>
        <span
          class="quarter__header-icon quarter__header-icon--next"
          @click="year++"
        >
          <slot name="header-right">
            <img src="./assets/next.png">
          </slot>
        </span>
      </div>
      <ul class="quarter__list">
        <li
          v-for="option in formatDropdownOptions"
          :key="option.value"
          class="quarter__list__item"
          :class="{
            'quarter__list__item--disabled': isDisabled(option.value),
            'quarter__list__item--selected': isSelected(option.value)
          }"
          @click="!isDisabled(option.value) && setDate(option.value)"
        >
          <slot :option="option">
            {{ option.label }}
          </slot>
        </li>
      </ul>
    </div>
  </VueSelectWrapper>
</template>

<style src="./style.css"></style>

<script>
import VueSelectWrapper from '@laomao800/vue-select-wrapper'
import {
  autoParseDate,
  formatDate,
  getYear,
  getQuarter
} from './utils/helper.js'

export default {
  name: 'QuarterSelect',

  components: {
    VueSelectWrapper
  },

  inheritAttrs: false,

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
        return `${year}年 第${quarter}季度`
      }
    },
    dropdownOptions: {
      type: Array,
      default: () => ['第一季度', '第二季度', '第三季度', '第四季度']
    },
    defaultValue: {
      type: Date
    }
  },

  data() {
    return {
      formatValue: '',
      year: new Date().getFullYear(),
      selectedYear: new Date().getFullYear(),
      selectedQuarter: ''
    }
  },

  computed: {
    formatDropdownOptions() {
      return this.dropdownOptions.map((item, index) => ({
        label: item,
        value: index + 1
      }))
    }
  },

  mounted() {
    // 保留组件传递进来的初始值，于清空时设置其初始值
    this.originValue = typeof this.value === 'string' ? '' : []
    if (this.defaultValue) {
      this.year = getYear(this.defaultValue)
      this.setDate(getQuarter(this.defaultValue))
    }
    this.$refs.selectWrapper && (this.selectWrapper = this.$refs.selectWrapper)
  },

  methods: {
    isSelected(quarter) {
      if (this.year === this.selectedYear && quarter === this.selectedQuarter) {
        return true
      }
      return false
    },
    // 设置禁用项
    isDisabled(quarter) {
      const minQuarter = this.minDate && getQuarter(this.minDate)
      const maxQuarter = this.maxDate && getQuarter(this.maxDate)
      const minYear = this.minDate && getYear(this.minDate)
      const maxYear = this.maxDate && getYear(this.maxDate)
      const curYear = +this.year
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
    transformValue(quarter, date) {
      this.formatValue = this.format(this.year, quarter, date)
    },

    setDate(quarter) {
      const beginDate = autoParseDate(this.year, (quarter - 1) * 3)
      const endDate = autoParseDate(
        beginDate.getFullYear(),
        beginDate.getMonth() + 3,
        beginDate.getDate() - 1
      )
      // 根据value-format转化时间格式
      const date = [
        formatDate(beginDate, this.valueFormat),
        formatDate(endDate, this.valueFormat)
      ]
      // 选择后保存选中的年份和季度
      this.selectedYear = this.year
      this.selectedQuarter = quarter
      this.transformValue(quarter, date)
      this.$emit('done', date)
    },

    clear() {
      this.selectedQuarter = ''
      this.formatValue = ''
      this.$emit('done', this.originValue)
    }
  }
}
</script>
