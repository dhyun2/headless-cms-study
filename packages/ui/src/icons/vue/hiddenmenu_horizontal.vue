<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6908_888)">
<path d="M5.4 13.4001C4.6268 13.4001 4 12.7733 4 12.0001C4 11.2269 4.6268 10.6001 5.4 10.6001C6.1732 10.6001 6.8 11.2269 6.8 12.0001C6.8 12.7733 6.1732 13.4001 5.4 13.4001Z" :fill="color"/>
<path d="M12 13.4001C11.2268 13.4001 10.6 12.7733 10.6 12.0001C10.6 11.2269 11.2268 10.6001 12 10.6001C12.7732 10.6001 13.4 11.2269 13.4 12.0001C13.4 12.7733 12.7732 13.4001 12 13.4001Z" :fill="color"/>
<path d="M18.6 13.4001C17.8268 13.4001 17.2 12.7733 17.2 12.0001C17.2 11.2269 17.8268 10.6001 18.6 10.6001C19.3732 10.6001 20 11.2269 20 12.0001C20 12.7733 19.3732 13.4001 18.6 13.4001Z" :fill="color"/>
</g>
<defs>
<clipPath id="clip0_6908_888">
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
