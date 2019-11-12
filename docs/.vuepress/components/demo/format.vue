<template>
  <div>
    <div>date: {{date}}</div>
    <vue-quarter-select
      v-model="date"
      :format="format"
    ></vue-quarter-select>
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
