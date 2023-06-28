<template>
  <div class="value-format__item">
    <vue-quarter-select v-model="value">
      <!-- 输入框前置图标 -->
      <template v-slot:prefix>prefix</template>
      <!-- 输入框后置图标 -->
      <template v-slot:suffix>suffix</template>
      <!-- 面板年份插槽 -->
      <template v-slot:year="{ year }">{{ year }} 年</template>
      <!-- 面板左图标 -->
      <template v-slot:prev-icon>上一年</template>
      <!-- 面板右图标 -->
      <template v-slot:next-icon>下一年</template>
      <!-- 面板选项 -->
      <template v-slot="{ option }">
        <span style="color: green;fontSize:18px;">👧👳{{ option.label }}</span>
      </template>
    </vue-quarter-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    }
  }
}
</script>
