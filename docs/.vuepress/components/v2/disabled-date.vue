<template>
  <div class="value-format__item">
    <div>value: {{ value }}</div>
    <vue-quarter-select
      v-model="value"
      :disabledDate="disabledDate"
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
    disabledDate(value) {
      return value > new Date() || value < new Date('2022-01-01')
    }
  }
}
</script>
