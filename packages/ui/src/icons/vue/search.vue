<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6908_939)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0001 4.9001C7.63116 4.9001 4.9001 7.63116 4.9001 11.0001C4.9001 14.369 7.63116 17.1001 11.0001 17.1001C14.369 17.1001 17.1001 14.369 17.1001 11.0001C17.1001 7.63116 14.369 4.9001 11.0001 4.9001ZM3.1001 11.0001C3.1001 6.63705 6.63705 3.1001 11.0001 3.1001C15.3631 3.1001 18.9001 6.63705 18.9001 11.0001C18.9001 12.8574 18.2592 14.5649 17.1865 15.9137L20.9365 19.6637L19.6637 20.9365L15.9137 17.1865C14.5649 18.2592 12.8574 18.9001 11.0001 18.9001C6.63705 18.9001 3.1001 15.3631 3.1001 11.0001Z" :fill="color"/>
</g>
<defs>
<clipPath id="clip0_6908_939">
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
