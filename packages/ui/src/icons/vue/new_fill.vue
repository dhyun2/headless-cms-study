<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_9614_562)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0001 2.1001C6.53248 2.1001 2.1001 6.53248 2.1001 12.0001C2.1001 17.4677 6.53248 21.9001 12.0001 21.9001C17.4677 21.9001 21.9001 17.4677 21.9001 12.0001C21.9001 6.53248 17.4677 2.1001 12.0001 2.1001ZM9.0001 8.6001V15.3001H10.6001V11.0365L13.4001 15.3001H15.0001V8.6001H13.4001V12.8637L10.6001 8.6001H9.0001Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_9614_562">
        <rect :width="`${size}px`" :height="`${size}px`" rx="5" fill="white" />
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
