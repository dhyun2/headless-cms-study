<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_889)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 5.1001L4 5.1001L4 6.9001L20 6.9001L20 5.1001ZM20 11.1001L4 11.1001L4 12.9001L20 12.9001L20 11.1001ZM20 17.1001L4 17.1001L4 18.9001L20 18.9001L20 17.1001Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_889">
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
