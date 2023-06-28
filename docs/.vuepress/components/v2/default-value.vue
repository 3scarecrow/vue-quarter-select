<template>
  <div>
    <div class="value-format__item">
      <div>单选模式设置默认值</div>
      <div>value: {{ value }}</div>
      <vue-quarter-select
        v-model="value"
        :default-value="defaultValue"
      ></vue-quarter-select>
    </div>
    <div class="value-format__item">
      <div>多选模式设置默认值</div>
      <div>value: {{ value2 }}</div>
      <vue-quarter-select
        v-model="value2"
        :multiple="true"
        :default-value="multipleDefault"
      ></vue-quarter-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultValue: new Date(),
      value: [],
      multipleDefault: [new Date(), new Date('2023-01-01')],
      value2: []
    }
  }
}
</script>
