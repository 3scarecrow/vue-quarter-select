<template>
  <div class="value-format__item">
    <div>value: {{ value }}</div>
    <vue-quarter-select-v1 v-model="value"></vue-quarter-select-v1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
