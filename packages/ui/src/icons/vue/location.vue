<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_898)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.94941 11.1001H6.99998V12.9001H3.94941C4.36445 16.6546 7.34552 19.6356 11.1 20.0507V17.0001H12.9V20.0507C16.6544 19.6356 19.6355 16.6546 20.0505 12.9001L17 12.9001V11.1001L20.0505 11.1001C19.6355 7.34564 16.6544 4.36457 12.9 3.94953L12.9 7.0001H11.1L11.1 3.94953C7.34552 4.36457 4.36445 7.34564 3.94941 11.1001ZM2.09998 12.0001C2.09998 6.53248 6.53236 2.1001 12 2.1001C17.4676 2.1001 21.9 6.53248 21.9 12.0001C21.9 17.4677 17.4676 21.9001 12 21.9001C6.53236 21.9001 2.09998 17.4677 2.09998 12.0001Z"
        :fill="color"
      />
      <path
        d="M13.4 12.0001C13.4 12.7733 12.7732 13.4001 12 13.4001C11.2268 13.4001 10.6 12.7733 10.6 12.0001C10.6 11.2269 11.2268 10.6001 12 10.6001C12.7732 10.6001 13.4 11.2269 13.4 12.0001Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_898">
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
