<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_899)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.09998 4.0001L3.99998 3.1001H20L20.9 4.0001V20.0001L20 20.9001H3.99998L3.09998 20.0001V4.0001ZM4.89998 4.9001V16.8273L7.36358 14.3637H8.63637L9.99998 15.7273L14.3636 11.3637H15.6364L19.1 14.8273V4.9001H4.89998ZM19.1 17.3729L15 13.2729L11.2728 17.0001L13.3728 19.1001H19.1V17.3729ZM10.8272 19.1001L7.99998 16.2729L5.17277 19.1001H10.8272Z"
        :fill="color"
      />
      <path
        d="M10.4 9.0001C10.4 9.7733 9.77317 10.4001 8.99998 10.4001C8.22678 10.4001 7.59998 9.7733 7.59998 9.0001C7.59998 8.2269 8.22678 7.6001 8.99998 7.6001C9.77317 7.6001 10.4 8.2269 10.4 9.0001Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_899">
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
