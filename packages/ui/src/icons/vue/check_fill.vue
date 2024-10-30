<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_9114_562)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.1001 12.0001C2.1001 6.53248 6.53248 2.1001 12.0001 2.1001C17.4677 2.1001 21.9001 6.53248 21.9001 12.0001C21.9001 17.4677 17.4677 21.9001 12.0001 21.9001C6.53248 21.9001 2.1001 17.4677 2.1001 12.0001ZM11.2519 13.2414L15.719 8.76441L16.9932 10.0358L11.8892 15.1511L10.6152 15.1513L7.06319 11.5937L8.337 10.3219L11.2519 13.2414Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_9114_562">
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
