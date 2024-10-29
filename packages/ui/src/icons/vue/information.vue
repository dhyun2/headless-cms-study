<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6908_895)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 3.9001C7.52659 3.9001 3.9001 7.52659 3.9001 12.0001C3.9001 16.4736 7.52659 20.1001 12.0001 20.1001C16.4736 20.1001 20.1001 16.4736 20.1001 12.0001C20.1001 7.52659 16.4736 3.9001 12.0001 3.9001ZM2.1001 12.0001C2.1001 6.53248 6.53248 2.1001 12.0001 2.1001C17.4677 2.1001 21.9001 6.53248 21.9001 12.0001C21.9001 17.4677 17.4677 21.9001 12.0001 21.9001C6.53248 21.9001 2.1001 17.4677 2.1001 12.0001ZM11.1001 17.5001V11.4001H12.9001V17.5001H11.1001Z" :fill="color"/>
<path d="M13.4001 8.0001C13.4001 8.7733 12.7733 9.4001 12.0001 9.4001C11.2269 9.4001 10.6001 8.7733 10.6001 8.0001C10.6001 7.2269 11.2269 6.6001 12.0001 6.6001C12.7733 6.6001 13.4001 7.2269 13.4001 8.0001Z" :fill="color"/>
</g>
<defs>
<clipPath id="clip0_6908_895">
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
