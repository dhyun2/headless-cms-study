<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_950)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.1 4.9001H3V3.1001L21 3.1001V4.9001H19.9V16.1001H21V17.9001H15.1728L17.1364 19.8637L15.8636 21.1365L12.6272 17.9001H11.3728L8.1364 21.1365L6.8636 19.8637L8.82721 17.9001H3V16.1001H4.1V4.9001ZM5.9 4.9001V16.1001H18.1V4.9001L5.9 4.9001ZM10.4958 6.44895L15.4958 9.74895V11.2512L10.4958 14.5512L9.1 13.8001V7.2001L10.4958 6.44895ZM10.9 8.87245V12.1277L13.3661 10.5001L10.9 8.87245Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_950">
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
