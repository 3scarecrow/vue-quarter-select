<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    fill="none"
    :class="iconName"
    :stroke="iconColor"
    stroke-width="4"
    aria-hidden="true"
    focusable="false"
  >
    <slot />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>

<style scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>
