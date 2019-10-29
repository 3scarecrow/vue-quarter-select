<template>
  <div>
    <div class="value-format__item">
      <div>默认值 date: {{date}}</div>
      <VueQuarterSelect v-model="date"></VueQuarterSelect>
    </div>
    <div class="value-format__item">
      <div>使用时间戳 date: {{date1}}</div>
      <VueQuarterSelect v-model="date1" value-format="timestamp"></VueQuarterSelect>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: [],
      date1: []
    }
  }
}
</script>
<style scoped>
.value-format__item {
  display: inline-block;
}
</style>
