<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_7109_29589)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0001 3.9001C7.52659 3.9001 3.9001 7.52659 3.9001 12.0001C3.9001 16.4736 7.52659 20.1001 12.0001 20.1001C16.4736 20.1001 20.1001 16.4736 20.1001 12.0001C20.1001 7.52659 16.4736 3.9001 12.0001 3.9001ZM2.1001 12.0001C2.1001 6.53248 6.53248 2.1001 12.0001 2.1001C17.4677 2.1001 21.9001 6.53248 21.9001 12.0001C21.9001 17.4677 17.4677 21.9001 12.0001 21.9001C6.53248 21.9001 2.1001 17.4677 2.1001 12.0001ZM12.9001 6.5001L12.9001 12.6001H11.1001L11.1001 6.5001H12.9001Z"
        :fill="color"
      />
      <path
        d="M10.6001 16.0001C10.6001 15.2269 11.2269 14.6001 12.0001 14.6001C12.7733 14.6001 13.4001 15.2269 13.4001 16.0001C13.4001 16.7733 12.7733 17.4001 12.0001 17.4001C11.2269 17.4001 10.6001 16.7733 10.6001 16.0001Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_7109_29589">
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
