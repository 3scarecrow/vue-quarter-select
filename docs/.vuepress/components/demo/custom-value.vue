<template>
  <div>
    <div>date: {{date}}</div>
    <VueQuarterSelect v-model="date" :custom-value="customValue"></VueQuarterSelect>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      customValue: (year, quarter, date) => `${year} ${quarter}季度`
    }
  }
}
</script>
