<template>
  <div>
    <div>date: {{date}}</div>
    <VueQuarterSelect
      v-model="date"
      :format="format"
    ></VueQuarterSelect>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      format: (year, quarter, date) => `${year} ${quarter}季度`
    }
  }
}
</script>
