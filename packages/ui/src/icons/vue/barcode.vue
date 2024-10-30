<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_885)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.1 4.0001L4 3.1001H8V4.9001H4.9V8.0001H3.1V4.0001ZM19.1 4.9001H16V3.1001H20L20.9 4.0001V8.0001H19.1V4.9001ZM21 12.9001H3V11.1001H21V12.9001ZM3.1 20.0001V16.0001H4.9V19.1001H8V20.9001H4L3.1 20.0001ZM19.1 19.1001V16.0001H20.9V20.0001L20 20.9001H16V19.1001H19.1Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_885">
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
