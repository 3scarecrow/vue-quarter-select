<template>
  <div class="value-format__item">
    <div>value: {{ value }}</div>
    <vue-quarter-panel v-model="value"></vue-quarter-panel>
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
