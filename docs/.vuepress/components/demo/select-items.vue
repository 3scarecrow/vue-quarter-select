<template>
  <div>
    <div>date: {{date}}</div>
    <vue-quarter-select
      v-model="date"
      :select-items="selectItems"
    ></vue-quarter-select>
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
