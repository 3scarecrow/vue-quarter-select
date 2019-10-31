<template>
  <div>
    <div>date: {{date}}</div>
    <VueQuarterSelect
      v-model="date"
      :select-items="selectItems"
    ></VueQuarterSelect>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      selectItems: ['first', 'second', 'third', 'four']
    }
  }
}
</script>
