<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_902)">
      <path
        d="M18.1007 12.0001C18.1007 13.5626 17.5053 15.1222 16.3141 16.3134C13.9319 18.6956 10.0696 18.6956 7.68736 16.3134C5.30516 13.9313 5.30516 10.0689 7.68736 7.68675C10.0696 5.30455 13.9319 5.30455 16.3141 7.68675C16.4469 7.81956 16.5722 7.95688 16.6901 8.09821H14.5558V9.89821H18.7984L19.6984 8.99821V4.75557H17.8984V6.74369C17.7983 6.63152 17.6944 6.52155 17.5869 6.41395C14.5017 3.32881 9.49971 3.32881 6.41456 6.41395C3.32942 9.4991 3.32942 14.5011 6.41456 17.5862C9.49971 20.6714 14.5017 20.6714 17.5869 17.5862C19.1292 16.0438 19.9007 14.0205 19.9007 12.0001H18.1007Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_902">
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
