<template>
  <VueSelectWrapper
    v-model="formatValue"
    :placeholder="placeholder"
    :clearable="clearable"
    v-bind="$attrs"
    @clear="clear"
  >
    <div class="quarter">
      <div class="quarter__header">
        <button
          class="iconfont icon-prev"
          :class="{ quarter__button_disabled: false }"
          @click="year--"
        ></button>
        <span class="quarter__header-label">{{ year }}年</span>
        <button
          class="iconfont icon-next"
          :class="{ quarter__button_disabled: false }"
          @click="year++"
        ></button>
      </div>
      <ul class="quarter__list">
        <li
          v-for="item in formatSelectItems"
          :key="item.value"
          :class="[
            'quarter__item',
            isDisabledQuarter(item.value) ? 'quarter__item_disabled' : ''
          ]"
          @click="!isDisabledQuarter(item.value) && setDate(item.value)"
        >{{ item.key }}</li>
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
// eslint-disable-next-line no-unused-vars
import { warn, error } from './utils/debug.js'

export default {
  name: 'QuarterSelector',

  components: {
    VueSelectWrapper
  },

  model: {
    prop: 'value',
    event: 'change'
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
    selectItems: {
      type: Array,
      default: () => ['第一季度', '第二季度', '第三季度', '第四季度']
    }
  },

  data() {
    return {
      formatValue: '',
      year: new Date().getFullYear()
    }
  },

  computed: {
    formatSelectItems() {
      return this.selectItems.map((item, index) => ({
        key: item,
        value: index + 1
      }))
    }
  },

  mounted() {
    // 保留组件传递进来的初始值，于清空时设置其初始值
    this.originValue = typeof this.value === 'string' ? '' : []
  },

  methods: {
    // 设置禁用项
    isDisabledQuarter(quarter) {
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
      this.transformValue(quarter, date)
      this.$emit('change', date)
    },

    clear() {
      this.$emit('change', this.originValue)
    }
  }
}
</script>
