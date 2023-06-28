<template>
  <div class="value-format__item">
    <div>value: {{ value }}</div>
    <vue-quarter-select v-model="value" :multiple="true"></vue-quarter-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: []
    }
  }
}
</script>
