<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.16487 4.86349C5.62532 6.23119 3.9001 8.91499 3.9001 12.0001C3.9001 16.4736 7.52659 20.1001 12.0001 20.1001C15.0851 20.1001 17.7688 18.375 19.1365 15.8356C18.7634 15.8782 18.3842 15.9001 18.0001 15.9001C12.5325 15.9001 8.1001 11.4677 8.1001 6.00006C8.1001 5.61584 8.12209 5.23658 8.16487 4.86349ZM2.1001 12.0001C2.1001 7.53106 5.06056 3.75586 9.12527 2.52417L10.2476 3.6466C10.022 4.39068 9.9001 5.18038 9.9001 6.00006C9.9001 10.4736 13.5266 14.1001 18.0001 14.1001C18.8202 14.1001 19.6098 13.9788 20.3533 13.7534L21.4757 14.8758C20.2437 18.9401 16.4688 21.9001 12.0001 21.9001C6.53248 21.9001 2.1001 17.4677 2.1001 12.0001Z" :fill="color"/>
</svg>

</template>

<script>
export default {
  name: 'allIcon',
  props: {
    size: {
      type: String,
      default: '24',
    },
    color: {
      type: String,
      default: 'currentColor',
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
