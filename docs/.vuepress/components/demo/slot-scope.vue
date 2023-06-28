<template>
  <div>
    <div class="value-format__item">
      <div>slot: <b>default</b></div>
      <div>value: {{ value }}</div>
      <vue-quarter-select-v1 v-model="value">
        <template v-slot="{ option }">
          <span style="color: green;fontSize:18px;">👧👩👳 —— {{ option.label }}</span>
        </template>
      </vue-quarter-select-v1>
    </div>
    <div class="value-format__item">
      <div>slot: <b>header-left, header-center, header-right</b></div>
      <div>value: {{ date1 }}</div>
      <vue-quarter-select-v1 v-model="date1">
        <template v-slot:header-left>上一年</template>
        <template v-slot:header-center="{ year }">{{ year }}</template>
        <template v-slot:header-right>上一年</template>
      </vue-quarter-select-v1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      date1: ''
    }
  }
}
</script>
