<template>
  <div>
    <div>date: {{date}}</div>
    <VueQuarterSelect v-model="date" :custom-select-items="customSelectItems"></VueQuarterSelect>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      customSelectItems: () => ['first', 'second', 'third', 'four']
    }
  }
}
</script>
