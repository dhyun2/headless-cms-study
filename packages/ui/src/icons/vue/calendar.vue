<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_883)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.9999 5.1L20.8999 6V20L19.9999 20.9H3.9999L3.0999 20V6L3.9999 5.1H7.0999V3H8.8999V5.1L15.0999 5.1V3H16.8999V5.1H19.9999ZM19.0999 6.9L4.8999 6.9V10.1H19.0999V6.9ZM19.0999 11.9L4.8999 11.9V19.1H19.0999V11.9Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_883">
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
