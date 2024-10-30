<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.1001 4.0001L8.0001 3.1001H16.0001L16.9001 4.0001V9.1001H19.0001L19.9001 10.0001V20.0001L19.0001 20.9001H5.0001L4.1001 20.0001V10.0001L5.0001 9.1001H7.1001V4.0001ZM8.9001 9.1001H15.1001V4.9001H8.9001V9.1001ZM5.9001 10.9001V19.1001H18.1001V10.9001H5.9001ZM11.1001 17.0001V13.0001H12.9001V17.0001H11.1001Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'allIcon',
  props: {
    size: {
      type: 16 | 20 | 24 | 32,
      default: 24,
    },
    color: {
      type: String,
      default: '',
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
