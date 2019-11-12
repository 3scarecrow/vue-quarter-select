<template>
  <div>
    <div>date: {{date}}</div>
    <vue-quarter-select v-model="date"></vue-quarter-select>
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
