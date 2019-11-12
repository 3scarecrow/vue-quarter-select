<template>
  <div class="value-format__item">
    <div>date: {{date}}</div>
    <vue-quarter-select
      v-model="date"
      min-date="2019-04-10"
      :max-date="new Date('2020-01-01')"
    ></vue-quarter-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: []
    }
  }
}
</script>

<style scoped>
.value-format__item {
  width: 350px;
}
</style>
