<template>
  <div>
    <div>date: {{date}}</div>
    <VueQuarterSelect v-model="date"></VueQuarterSelect>
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
