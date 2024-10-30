<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_11642_13367)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.6272 3.1001H13.3728L20.9 10.6273V20.9001H3.09998V10.6273L10.6272 3.1001ZM11.3728 4.9001L4.89998 11.3729V19.1001H19.1V11.3729L12.6272 4.9001H11.3728Z"
        :fill="color"
      />
      <path
        d="M9.32184 16.1323C8.66291 15.5278 8.29998 14.6325 8.29998 13.6127C8.31043 11.4184 9.95149 10.0001 12.4805 10.0001C13.3601 10.0001 14.0421 10.1486 14.4312 10.2982C14.3893 10.4509 14.1812 11.2102 14.132 11.3859C13.6624 11.2019 13.1436 11.113 12.469 11.113C10.8614 11.113 9.86258 12.0376 9.86258 13.528C9.86258 15.0184 10.8374 15.9755 12.3456 15.9755C12.7138 15.9755 13.0537 15.9347 13.2116 15.873L13.2817 15.8458V14.1597H12.1228V13.1211H14.7V16.6825C14.1028 16.8676 13.1855 17.058 12.3017 17.058C10.9849 17.058 10.0111 16.7557 9.32289 16.1334L9.32184 16.1323Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_11642_13367">
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
