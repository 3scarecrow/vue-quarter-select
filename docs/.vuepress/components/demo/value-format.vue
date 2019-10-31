<template>
  <div>
    <div class="value-format__item">
      <div>默认绑定值格式: yyyy-MM-dd</div>
      <div>date: {{date}}</div>
      <VueQuarterSelect v-model="date"></VueQuarterSelect>
    </div>
    <div class="value-format__item">
      <div>绑定值为时间戳 value-format: timestamp</div>
      <div>date: {{date1}}</div>
      <VueQuarterSelect
        v-model="date1"
        value-format="timestamp"
      ></VueQuarterSelect>
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
