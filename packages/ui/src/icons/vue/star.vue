<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.2774 2.06323L12.7224 2.06323L16.0492 6.54201L21.4068 8.27328L21.8558 9.66193L18.5597 14.1563L18.5427 19.6979L17.3711 20.5531L11.9999 18.8529L6.6288 20.5531L5.4572 19.6979L5.44015 14.1563L2.14404 9.66193L2.59305 8.27328L7.95066 6.54201L11.2774 2.06323ZM11.9999 4.10923L9.22393 7.84652L8.77817 8.16626L4.33281 9.60274L7.06499 13.3282L7.23924 13.8577L7.25342 18.4674L11.7283 17.0509H12.2715L16.7464 18.4674L16.7606 13.8577L16.9349 13.3282L19.667 9.60274L15.2217 8.16626L14.7759 7.84652L11.9999 4.10923Z"
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
