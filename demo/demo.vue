<template>
  <div id="demo" style="text-align: center;padding-top: 100px;">
    <VueQuarterSelect
      v-model="date"
      min-year="2017"
      max-year="2022"
      size="medium"
      style="width: 200px;"
    />
  </div>
</template>
<script>
import VueQuarterSelect from '../src'
import VueSelectWrapper from '@laomao800/vue-select-wrapper'
export default {
  name: 'App',
  components: {
    VueQuarterSelect,
    VueSelectWrapper,
  },
  data() {
    return {
      date: ''
    }
  }
}
</script>
