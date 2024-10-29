<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6908_922)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3729 4.90025L8.17704 8.09597L11.9921 8.0958L11.9921 9.8958L7.9001 9.89598V11.5001L7.65164 12.0999H9.99993V13.8999H5.87305L4.9001 14.8729V19.1001H9.62731L18.7825 9.94487L14.5786 4.90012L11.3729 4.90025ZM12.1729 19.1001L20.6365 10.6365L20.6915 9.42393L15.6915 3.42393L15.0001 3.1001L11.0001 3.10026L10.3637 3.36385L6.36371 7.36369L6.1001 8.0001V11.1273L3.3637 13.8637L3.1001 14.5001V20.0001L4.0001 20.9001H21.0001V19.1001H12.1729Z" :fill="color"/>
</g>
<defs>
<clipPath id="clip0_6908_922">
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
