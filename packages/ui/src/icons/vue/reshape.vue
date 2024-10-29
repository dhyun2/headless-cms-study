<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6908_943)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.8999 18.0999L10.9999 18.0999L10.9999 19.8999L4.9999 19.8999L4.0999 18.9999L4.0999 12.9999L5.8999 12.9999L5.8999 18.0999ZM19.8999 4.9999L19.8999 10.9999L18.0999 10.9999L18.0999 5.8999L12.9999 5.8999L12.9999 4.0999L18.9999 4.0999L19.8999 4.9999Z" :fill="color"/>
</g>
<defs>
<clipPath id="clip0_6908_943">
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
