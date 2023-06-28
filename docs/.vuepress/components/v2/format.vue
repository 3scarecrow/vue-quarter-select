<template>
  <div class="value-format__item">
    <div>value: {{ value }}</div>
    <vue-quarter-select
      v-model="value"
      :format="format"
    ></vue-quarter-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      format: (year, quarter, value) => `${year} ${quarter}季度`
    }
  }
}
</script>
