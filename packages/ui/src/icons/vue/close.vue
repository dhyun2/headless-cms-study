<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6908_890)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.727 12.0001L4.86363 17.8637L6.13644 19.1365L11.9998 13.2729L17.8634 19.1365L19.1362 17.8637L13.2726 12.0001L19.1362 6.1363L17.8634 4.86353L11.9998 10.7273L6.13607 4.86357L4.86328 6.13636L10.727 12.0001Z" :fill="color"/>
</g>
<defs>
<clipPath id="clip0_6908_890">
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
