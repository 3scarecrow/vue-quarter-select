<template>
  <div class="value-format__item">
    <div>value: {{ value }}</div>
    <vue-quarter-select-v1
      v-model="value"
      min-date="2019-04-10"
      :max-date="new Date('2020-01-01')"
    ></vue-quarter-select-v1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: []
    }
  }
}
</script>
