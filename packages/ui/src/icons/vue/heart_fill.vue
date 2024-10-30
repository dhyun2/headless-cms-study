<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.1001 9.0001C2.1001 5.74162 4.74162 3.1001 8.0001 3.1001C9.54413 3.1001 10.9497 3.69382 12.0005 4.66348C13.0511 3.69406 14.4561 3.1001 16.0001 3.1001C19.2586 3.1001 21.9001 5.74162 21.9001 9.0001C21.9001 10.3275 21.4606 11.5549 20.7196 12.5412L20.692 12.578L16.9489 16.6241L12.6365 20.9365L11.3637 20.9365L7.05133 16.6241L3.3082 12.578L3.28055 12.5412C2.53956 11.5549 2.1001 10.3275 2.1001 9.0001Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'allIcon',
  props: {
    size: {
      type: 16 | 20 | 24 | 32,
      default: 24,
    },
    color: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: middle;
}
</style>
