<template>
  <div class="value-format__item">
    <div>date: {{date}}</div>
    <vue-quarter-select
      v-model="date"
      :default-value="new Date()"
    ></vue-quarter-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: ''
    }
  }
}
</script>
<style scoped>
.value-format__item {
  width: 350px;
}
</style>
