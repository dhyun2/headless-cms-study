<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6908_913)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6363 7.0637L20.9363 11.3637L20.9363 12.6365L16.6363 16.9365L15.3635 15.6637L18.1271 12.9001L9.99988 12.9001L9.99988 11.1001L18.1271 11.1001L15.3635 8.33649L16.6363 7.0637ZM11.9999 4.1001L12.8999 5.0001L12.8999 8.0001L11.0999 8.0001L11.0999 5.9001L4.89988 5.9001L4.89988 18.1001L11.0999 18.1001L11.0999 16.0001L12.8999 16.0001L12.8999 19.0001L11.9999 19.9001L3.99988 19.9001L3.09988 19.0001L3.09988 5.0001L3.99988 4.1001L11.9999 4.1001Z" :fill="color"/>
</g>
<defs>
<clipPath id="clip0_6908_913">
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
