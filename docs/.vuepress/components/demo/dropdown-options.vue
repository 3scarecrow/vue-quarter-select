<template>
  <div class="value-format__item ">
    <div>date: {{date}}</div>
    <vue-quarter-select
      v-model="date"
      :dropdown-options="dropdownOptions"
    ></vue-quarter-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      dropdownOptions: ['first', 'second', 'third', 'four']
    }
  }
}
</script>
<style scoped>
.value-format__item {
  width: 350px;
}
</style>
