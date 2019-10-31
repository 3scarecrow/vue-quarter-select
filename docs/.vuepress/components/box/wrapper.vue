<template>
  <div class="demo-wrapper">
    <div class="dw__content">
      <div v-if="$slots.des" class="dw__des">
        <slot name="des"></slot>
      </div>
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
  props: ['title'],
  data() {
    return {
      isShow: false
    }
  }
}
</script>
