<template>
  <div class="value-format__item ">
    <div>value: {{ value }}</div>
    <vue-quarter-select-v1
      v-model="value"
      :dropdown-options="dropdownOptions"
    ></vue-quarter-select-v1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      dropdownOptions: ['first', 'second', 'third', 'four']
    }
  }
}
</script>
