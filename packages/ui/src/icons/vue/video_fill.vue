<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8583_43595)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.09998 5.0001L2.99998 4.1001H16L16.9 5.0001V8.04387L20.5975 6.19511L21.9 7.0001V17.0001L20.5975 17.8051L16.9 15.9563V19.0001L16 19.9001H2.99998L2.09998 19.0001V5.0001ZM6.79997 9.2001L8.17545 8.43595L12.6754 11.2359V12.7642L8.17545 15.5642L6.79997 14.8001V9.2001Z" :fill="color"/>
</g>
<defs>
<clipPath id="clip0_8583_43595">
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
