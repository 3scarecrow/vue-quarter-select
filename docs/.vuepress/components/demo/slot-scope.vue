<template>
  <div class="value-format__item">
    <div>date: {{date}}</div>
    <vue-quarter-select v-model="date">
      <template slot-scope="{ option }">
        <span style="color: green;fontSize:18px;">👧👩👳</span>
      </template>
    </vue-quarter-select>
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
