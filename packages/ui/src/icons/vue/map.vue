<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_910)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.59761 5.86174L8.93094 3.19507H9.73592L14.6668 5.66049L19.5976 3.19507L20.9001 4.00005V17.3334L20.4026 18.1384L15.0693 20.805H14.2643L9.33343 18.3396L4.40259 20.805L3.1001 20.0001V6.66672L3.59761 5.86174ZM10.2334 16.7772L13.7668 18.5438V7.22295L10.2334 5.45628V16.7772ZM8.43343 5.45628L4.9001 7.22295V18.5438L8.43343 16.7772V5.45628ZM15.5668 7.22295V18.5438L19.1001 16.7772V5.45628L15.5668 7.22295Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_910">
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
