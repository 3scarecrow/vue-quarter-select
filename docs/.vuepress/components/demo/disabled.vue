<template>
  <div>
    <div>date: {{date}}</div>
    <vue-quarter-select
      v-model="date"
      minDate="2019-04-10"
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

<style>
</style>
