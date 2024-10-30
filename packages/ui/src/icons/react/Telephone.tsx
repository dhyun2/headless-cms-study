import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_909)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.04257 3.74634L8.97877 3.10571L9.81931 3.42338L12.0383 6.12973L12.1337 7.12909L11.1626 8.92166L14.7923 13.3107L16.7852 12.7336L17.7315 13.0274L19.919 15.6953L20.0658 16.5818L18.6659 20.3158L17.735 20.8955L13.5108 20.4795L12.9037 20.1552L4.08423 9.42126L3.88379 8.7633L4.29132 4.54804L5.04257 3.74634ZM6.01623 5.41156L5.71125 8.56609L14.058 18.7247L17.2232 19.0364L18.1983 16.4355L16.7159 14.6276L14.7256 15.204L13.7817 14.9131L9.3883 9.60066L9.29052 8.59837L10.263 6.80338L8.75614 4.96563L6.01623 5.41156Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_909">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
