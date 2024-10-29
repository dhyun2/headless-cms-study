<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6908_915)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1729 5.60012L15.9365 3.83651L14.6637 2.56372L12.0001 5.22732L9.33649 2.56372L8.0637 3.83651L9.82731 5.60012H4.0001L3.1001 6.50012V20.0001L4.0001 20.9001H20.0001L20.9001 20.0001V6.50012L20.0001 5.60012H14.1729ZM11.1001 7.40012V10.1001H4.9001V7.40012H11.1001ZM4.9001 11.9001V19.1001H11.1001V11.9001H4.9001ZM12.9001 11.9001V19.1001H19.1001V11.9001H12.9001ZM19.1001 10.1001V7.40012H12.9001V10.1001H19.1001Z" :fill="color"/>
</g>
<defs>
<clipPath id="clip0_6908_915">
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
