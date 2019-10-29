<template>
  <div id="demo" style="padding-top: 100px;margin: 0 auto;">
    <VueQuarterSelect v-model="date" />
  </div>
</template>
<script>
import VueQuarterSelect from '../src'
import VueSelectWrapper from '@laomao800/vue-select-wrapper'
export default {
  name: 'App',
  components: {
    VueQuarterSelect,
    VueSelectWrapper
  },
  data() {
    return {
      date: ''
    }
  }
}
</script>
