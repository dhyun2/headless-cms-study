<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_887)">
      <path
        d="M13.4001 5.4C13.4001 6.1732 12.7733 6.8 12.0001 6.8C11.2269 6.8 10.6001 6.1732 10.6001 5.4C10.6001 4.6268 11.2269 4 12.0001 4C12.7733 4 13.4001 4.6268 13.4001 5.4Z"
        :fill="color"
      />
      <path
        d="M13.4001 12C13.4001 12.7732 12.7733 13.4 12.0001 13.4C11.2269 13.4 10.6001 12.7732 10.6001 12C10.6001 11.2268 11.2269 10.6 12.0001 10.6C12.7733 10.6 13.4001 11.2268 13.4001 12Z"
        :fill="color"
      />
      <path
        d="M13.4001 18.6C13.4001 19.3732 12.7733 20 12.0001 20C11.2269 20 10.6001 19.3732 10.6001 18.6C10.6001 17.8268 11.2269 17.2 12.0001 17.2C12.7733 17.2 13.4001 17.8268 13.4001 18.6Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_887">
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
