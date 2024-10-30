<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_879)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.1001 6.0001L3.0001 5.1001H21.0001L21.9001 6.0001V18.0001L21.0001 18.9001H3.0001L2.1001 18.0001V6.0001ZM3.9001 6.9001V9.1001L20.1001 9.1001V6.9001H3.9001ZM20.1001 10.9001L3.9001 10.9001V17.1001H20.1001V10.9001ZM6.0001 13.1001H10.0001V14.9001H6.0001V13.1001Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_879">
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
