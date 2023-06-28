<template>
  <div class="value-format__item">
    <div>value: {{ value }}</div>
    <vue-quarter-select
      v-model="value"
      :option-format="optionFormat"
    ></vue-quarter-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: []
    }
  },
  methods: {
    optionFormat(quarter) {
      return `季度${quarter}`
    }
  }
}
</script>
