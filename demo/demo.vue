<template>
  <div id="demo" style="padding-top: 100px;margin-left: 300px;">
    <VueQuarterSelect
      v-model="date"
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
