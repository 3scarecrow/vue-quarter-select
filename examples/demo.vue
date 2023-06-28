<template>
  <div
    id="demo"
    style="padding-top: 100px;margin: 0 auto;"
  >
    value: {{ date }}
    <VueQuarterSelect v-model="date" :default-value="defaultValue">
      <template v-slot:prefix>pre</template>
      <template v-slot:suffix>suf</template>

      <template v-slot:year="{ year }">{{ year }} 年</template>
      <template v-slot:prev-icon>&lt;</template>
      <template v-slot:next-icon>&gt;</template>
      <template v-slot="{ option }">
        <span style="color: green;fontSize:18px;">👩👳 — {{ option.label }}</span>
      </template>
    </VueQuarterSelect>
    <!-- 多选 value: {{ mdata }}
    <VueQuarterSelect
      v-model="mdata"
      multiple
    >
    </VueQuarterSelect>
    多选且禁用 value: {{ mdata1 }}
    <VueQuarterSelect
      v-model="mdata1"
      multiple
      :limit="2"
      :limitText="count => `还有${count}`"
      :disabledDate="disabledDate"
    >
    </VueQuarterSelect> -->
    面板
    <VueQuarterPanel>
      <template v-slot:year="{ year }">{{ year }} 年</template>
      <template v-slot="{ option }">
        <span style="color: green;fontSize:18px;">👧👩👳 —— {{ option.label }}</span>
      </template>
    </VueQuarterPanel>
  </div>
</template>
<script>
import { VueQuarterSelect, VueQuarterPanel } from '../src'
export default {
  name: 'Demo',

  components: {
    VueQuarterSelect,
    VueQuarterPanel
  },

  data() {
    return {
      defaultValue: new Date(),
      date: '',
      mdata: [],
      mdata1: []
    }
  },

  methods: {
    disabledDate(date) {
      return date > new Date() || date < new Date('2022-01-01')
    }
  }
}
</script>
