<template>
  <div class="demo-wrapper">
    <div class="dw__header">
      <h3>{{title}}</h3>
    </div>
    <div class="dw__content">
      <div class="dw__component">
        <slot></slot>
      </div>
      <div class="dw__button">
        <div class="dw__button_code" @click="isShow = !isShow"></div>
      </div>
      <div class="dw__code" v-if="$slots.code" v-show="isShow">
        <slot name="code" />
      </div>
    </div>
  </div>
</template>

<style src="./style.css"></style>

<script>
export default {
  name: 'wrapper',
  props: {
    title: ''
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    showCode() {}
  }
}
</script>
