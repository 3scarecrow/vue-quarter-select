<template>
  <div
    id="demo"
    style="padding-top: 100px;margin: 0 auto;"
  >
    <VueQuarterSelect v-model="date" />
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
      date: ''
    }
  }
}
</script>
