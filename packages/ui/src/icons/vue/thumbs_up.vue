<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_904)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.195 3.59761L12 3.1001H15.5L16.3877 4.14806L15.5624 9.1001H20L20.877 10.2023L18.5711 20.2023L17.6941 20.9001H4.99998L4.09998 20.0001V10.0001L4.99998 9.1001H8.44375L11.195 3.59761ZM8.09998 10.9001H5.89998V19.1001H8.09998V10.9001ZM9.89998 19.1001H16.978L18.8688 10.9001H14.5L13.6122 9.85214L14.4376 4.9001H12.5562L9.89998 10.2126V19.1001Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_904">
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
