<template>
  <div>
    <div class="value-format__item">
      <div>value-format: yyyy-MM</div>
      <div>date: {{date}}</div>
      <vue-quarter-select v-model="date" value-format="yyyy-MM"></vue-quarter-select>
    </div>
    <div class="value-format__item">
      <div>value-format: timestamp</div>
      <div>date: {{date1}}</div>
      <vue-quarter-select
        v-model="date1"
        value-format="timestamp"
      ></vue-quarter-select>
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
  width: 350px;
}
</style>
