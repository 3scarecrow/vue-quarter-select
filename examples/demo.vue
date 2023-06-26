<template>
  <div
    id="demo"
    style="padding-top: 100px;margin: 0 auto;"
  >
    value: {{ date }}
    <QuarterSelect v-model="date" >
    </QuarterSelect>
    多选 value: {{ mdata }}
    <QuarterSelect
      v-model="mdata"
      multiple
    >
    </QuarterSelect>
    多选且禁用 value: {{ mdata1 }}
    <QuarterSelect
      v-model="mdata1"
      multiple
      :limit="2"
      :limitText="count => `还有${count}`"
      :disabledDate="disabledDate"
    >
    </QuarterSelect>
    面板
    <QuarterPanel></QuarterPanel>
  </div>
</template>
<script>
import QuarterSelect, { QuarterPanel } from '../src'
export default {
  name: 'Demo',

  components: {
    QuarterSelect,
    QuarterPanel
  },

  data() {
    return {
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
