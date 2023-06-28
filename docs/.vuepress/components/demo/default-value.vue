<template>
  <div class="value-format__item">
    <div>value: {{ value }}</div>
    <vue-quarter-select-v1
      v-model="value"
      :default-value="defaultValue"
    ></vue-quarter-select-v1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultValue: new Date(),
      value: ''
    }
  }
}
</script>
