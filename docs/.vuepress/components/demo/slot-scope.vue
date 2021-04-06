<template>
  <div>
    <div class="value-format__item">
      <div>slot: <b>default</b></div>
      <div>date: {{date}}</div>
      <vue-quarter-select v-model="date">
        <template v-slot="{ option }">
          <span style="color: green;fontSize:18px;">👧👩👳 —— {{option.label}}</span>
        </template>
      </vue-quarter-select>
    </div>
    <div class="value-format__item">
      <div>slot: <b>header-left, header-center, header-right</b></div>
      <div>date: {{date1}}</div>
      <vue-quarter-select v-model="date1">
        <template v-slot:header-left>上一年</template>
        <template v-slot:header-center="{ year }">{{ year }}</template>
        <template v-slot:header-right>上一年</template>
      </vue-quarter-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      date1: ''
    }
  }
}
</script>
<style scoped>
.value-format__item {
  display: inline-block;
  width: 350px;
}
</style>
