<template>
  <VueSelectWrapper
    v-model="displayValue"
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
          v-for="item in QuarterMap"
          :key="item.value"
          class="quarter__item"
          @click="setDate(item.value)"
        >
          {{ item.key }}
        </li>
      </ul>
    </div>
  </VueSelectWrapper>
</template>

<style src="./style.css"></style>

<script>
import VueSelectWrapper from '@laomao800/vue-select-wrapper'
import { autoParseDate, formatDate } from './utils/helper.js'

const QuarterMap = [
  {
    key: '第一季度',
    value: 1
  },
  {
    key: '第二季度',
    value: 2
  },
  {
    key: '第三季度',
    value: 3
  },
  {
    key: '第四季度',
    value: 4
  }
]

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
    placeholder: {
      type: String,
      default: '请选择季度'
    },
    clearable: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      QuarterMap,
      displayValue: '',
      year: new Date().getFullYear()
    }
  },

  mounted () {
    this.originValue = typeof this.value === 'string' ? '' : []
  },

  methods: {
    setDate (num) {
      const beginDate = autoParseDate(this.year, (num - 1) * 3)
      const endDate = autoParseDate(
        beginDate.getFullYear(),
        beginDate.getMonth() + 3,
        beginDate.getDate() - 1
      )
      const date = [formatDate(beginDate), formatDate(endDate)]
      this.displayValue = `${this.year} 第${num}季度`
      this.$emit('change', date)
    },

    clear () {
      this.$emit('change', this.originValue)
    }
  }
}
</script>
