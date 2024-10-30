<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_8583_43461)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.1001 12.0001C2.1001 6.53248 6.53248 2.1001 12.0001 2.1001C17.4677 2.1001 21.9001 6.53248 21.9001 12.0001C21.9001 17.4677 17.4677 21.9001 12.0001 21.9001C6.53248 21.9001 2.1001 17.4677 2.1001 12.0001ZM10.7273 12.0003L7.8637 9.13668L9.13649 7.86389L12.0001 10.7275L14.8637 7.86389L16.1365 9.13668L13.2729 12.0003L16.1365 14.8639L14.8637 16.1367L12.0001 13.2731L9.13649 16.1367L7.8637 14.8639L10.7273 12.0003Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_8583_43461">
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
