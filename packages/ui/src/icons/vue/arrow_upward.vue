<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6908_937)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1 6.87291L5.3364 12.6365L4.06361 11.3637L11.3636 4.06372H12.6364L19.9364 11.3637L18.6636 12.6365L12.9 6.87291V20.0001H11.1L11.1 6.87291Z" :fill="color"/>
</g>
<defs>
<clipPath id="clip0_6908_937">
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
