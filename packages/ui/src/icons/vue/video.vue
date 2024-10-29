<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.09998 5.0001L2.99998 4.1001H16L16.9 5.0001V8.04387L20.5975 6.19511L21.9 7.0001V17.0001L20.5975 17.8051L16.9 15.9563V19.0001L16 19.9001H2.99998L2.09998 19.0001V5.0001ZM16.9 13.9439L20.1 15.5439V8.45633L16.9 10.0563V13.9439ZM3.89998 5.9001V18.1001H15.1V5.9001H3.89998ZM6.29997 8.2001L7.71156 7.45964L13.2116 11.2596V12.7406L7.71156 16.5406L6.29997 15.8001V8.2001ZM8.09997 9.91583V14.0844L11.1167 12.0001L8.09997 9.91583Z" :fill="color"/>
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
