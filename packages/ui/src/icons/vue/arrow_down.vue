<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_892)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0001 3.9001C7.52659 3.9001 3.9001 7.52659 3.9001 12.0001C3.9001 16.4736 7.52659 20.1001 12.0001 20.1001C16.4736 20.1001 20.1001 16.4736 20.1001 12.0001C20.1001 7.52659 16.4736 3.9001 12.0001 3.9001ZM2.1001 12.0001C2.1001 6.53248 6.53248 2.1001 12.0001 2.1001C17.4677 2.1001 21.9001 6.53248 21.9001 12.0001C21.9001 17.4677 17.4677 21.9001 12.0001 21.9001C6.53248 21.9001 2.1001 17.4677 2.1001 12.0001ZM12.9001 6.5001L12.9001 14.6273L15.6637 11.8637L16.9365 13.1365L12.6365 17.4365L11.3637 17.4365L7.0637 13.1365L8.33649 11.8637L11.1001 14.6273L11.1001 6.5001H12.9001Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_892">
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
