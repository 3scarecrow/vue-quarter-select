<template>
  <div>
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
