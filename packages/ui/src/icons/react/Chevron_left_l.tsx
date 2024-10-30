import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.57276 11.9999L15.9364 3.63632L14.6636 2.36353L5.66357 11.3635V12.6363L14.6636 21.6363L15.9364 20.3635L7.57276 11.9999Z"
      fill={color}
    />
  </svg>
);

export default allIcon;
