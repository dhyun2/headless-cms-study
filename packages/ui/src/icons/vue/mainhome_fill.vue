<template>
  <svg :width="`${size}px`" :height="`${size}px`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_11642_13364)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.3731 3.09985H10.6275L3.10034 10.6271V20.8999H20.9003V10.6271L13.3731 3.09985ZM8.30034 13.6125C8.30034 14.6322 8.66328 15.5276 9.32221 16.1321L9.32325 16.1331C10.0115 16.7555 10.9852 17.0577 12.302 17.0577C13.1858 17.0577 14.1031 16.8674 14.7003 16.6823V13.1209H12.1232V14.1595H13.2821V15.8455L13.212 15.8727C13.0541 15.9344 12.7141 15.9752 12.346 15.9752C10.8377 15.9752 9.86295 15.0182 9.86295 13.5278C9.86295 12.0373 10.8618 11.1127 12.4694 11.1127C13.144 11.1127 13.6628 11.2016 14.1324 11.3857C14.1816 11.21 14.3897 10.4506 14.4315 10.2979C14.0425 10.1484 13.3605 9.99985 12.4809 9.99985C9.95185 9.99985 8.3108 11.4181 8.30034 13.6125Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_11642_13364">
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
