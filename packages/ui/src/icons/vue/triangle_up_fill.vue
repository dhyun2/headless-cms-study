<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_9316_1507)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2866 7.65137L6.28662 14.1514L6.99998 15.6001H17L17.7133 14.1514L12.7133 7.65137H11.2866Z" :fill="color"/>
</g>
<defs>
<clipPath id="clip0_9316_1507">
<rect :width="size" :height="size" rx="5" fill="white"/>
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
