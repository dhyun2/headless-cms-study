<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_874)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.0637 7.36372L11.3637 3.06372H12.6365L16.9365 7.36372L15.6637 8.63651L12.9001 5.87291V14.0001H11.1001V5.87291L8.33649 8.63651L7.0637 7.36372ZM4.1001 12.0001L5.0001 11.1001H8.0001V12.9001H5.9001V19.1001H18.1001V12.9001H16.0001V11.1001H19.0001L19.9001 12.0001V20.0001L19.0001 20.9001H5.0001L4.1001 20.0001V12.0001Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_874">
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
