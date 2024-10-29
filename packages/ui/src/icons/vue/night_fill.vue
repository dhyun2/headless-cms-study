<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8583_43459)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.1001 12.0001C2.1001 7.53106 5.06056 3.75586 9.12527 2.52417L10.2476 3.6466C10.022 4.39068 9.9001 5.18038 9.9001 6.00006C9.9001 10.4736 13.5266 14.1001 18.0001 14.1001C18.8202 14.1001 19.6098 13.9788 20.3533 13.7534L21.4757 14.8758C20.2437 18.9401 16.4688 21.9001 12.0001 21.9001C6.53248 21.9001 2.1001 17.4677 2.1001 12.0001Z" :fill="color"/>
</g>
<defs>
<clipPath id="clip0_8583_43459">
<rect :width="size" :height="size" fill="white"/>
</clipPath>
</defs>
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
