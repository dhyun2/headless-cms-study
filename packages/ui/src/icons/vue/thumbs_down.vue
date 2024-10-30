<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_905)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.42893 3.79787L6.30592 3.1001H19L19.9 4.0001V14.0001L19 14.9001H15.5563L12.805 20.4026L12 20.9001H8.50003L7.61228 19.8521L8.43762 14.9001H4.00003L3.12305 13.7979L5.42893 3.79787ZM15.9 13.1001H18.1V4.9001H15.9V13.1001ZM14.1 4.9001H7.02201L5.13118 13.1001H9.50003L10.3878 14.1481L9.56245 19.1001H11.4438L14.1 13.7876V4.9001Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_905">
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
