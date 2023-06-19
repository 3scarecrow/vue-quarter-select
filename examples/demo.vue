<template>
  <div
    id="demo"
    style="padding-top: 100px;margin: 0 auto;"
  >
    value: {{ date }}
    <VueQuarterSelect
      v-model="date"
    >
    </VueQuarterSelect>
    多选 value: {{ mdata }}
    <VueQuarterSelect
      v-model="mdata"
      multiple
    >
    </VueQuarterSelect>
    <VueQuarterSelect
      v-model="mdata"
      multiple
      :disabledDate="disabledDate"
    >
    </VueQuarterSelect>
  </div>
</template>
<script>
import VueQuarterSelect from '../src'
export default {
  name: 'App',
  components: {
    VueQuarterSelect
  },
  data() {
    return {
      date: '',
      mdata: []
    }
  },

  methods: {
    disabledDate(date) {
      return date > new Date() || date < new Date('2022-01-01')
    }
  }
}
</script>
