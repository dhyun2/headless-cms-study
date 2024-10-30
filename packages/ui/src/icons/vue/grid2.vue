<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_919)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.1001 4.0001L4.0001 3.1001H20.0001L20.9001 4.0001V20.0001L20.0001 20.9001H4.0001L3.1001 20.0001V4.0001ZM4.9001 4.9001V8.4001H8.4001V4.9001H4.9001ZM10.2001 4.9001V8.4001H13.8001V4.9001H10.2001ZM15.6001 4.9001V8.4001H19.1001V4.9001H15.6001ZM19.1001 10.2001H15.6001V13.8001H19.1001V10.2001ZM19.1001 15.6001H15.6001V19.1001H19.1001V15.6001ZM13.8001 19.1001V15.6001H10.2001V19.1001H13.8001ZM8.4001 19.1001V15.6001H4.9001V19.1001H8.4001ZM4.9001 13.8001H8.4001V10.2001H4.9001V13.8001ZM10.2001 10.2001V13.8001H13.8001V10.2001H10.2001Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_919">
        <rect :width="`${size}px`" :height="`${size}px`" fill="white" />
      </clipPath>
    </defs>
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
