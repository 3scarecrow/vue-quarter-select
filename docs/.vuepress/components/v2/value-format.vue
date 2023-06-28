<template>
  <div>
    <div class="value-format__item">
      <div>value-format: yyyy-MM</div>
      <div>value: {{ value }}</div>
      <vue-quarter-select v-model="value" value-format="yyyy-MM"></vue-quarter-select>
    </div>
    <div class="value-format__item">
      <div>value-format: timestamp</div>
      <div>value: {{ date1 }}</div>
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
      value: [],
      date1: []
    }
  }
}
</script>
