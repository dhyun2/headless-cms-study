<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_8111_3974)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.1001 5.0001L3.0001 4.1001H10.3001L10.9691 4.39803L13.4009 7.1001H21.0001L21.9001 8.0001V19.0001L21.0001 19.9001H3.0001L2.1001 19.0001V5.0001ZM10.9793 7.1001L9.89927 5.9001H3.9001V7.1001H10.9793ZM3.9001 8.9001V18.1001H20.1001V8.9001H3.9001Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_8111_3974">
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
