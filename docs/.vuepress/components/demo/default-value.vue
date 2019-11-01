<template>
  <div>
    <div>date: {{date}}</div>
    <VueQuarterSelect
      v-model="date"
      :default-value="new Date()"
    ></VueQuarterSelect>
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
