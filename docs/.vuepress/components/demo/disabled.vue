<template>
  <div>
    <div>date: {{date}}</div>
    <VueQuarterSelect v-model="date" minDate="2019-04-10" :max-date="new Date('2020-01-01')"></VueQuarterSelect>
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
