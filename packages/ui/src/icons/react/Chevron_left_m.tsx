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
      d="M10.2727 11.9999L15.6363 6.63632L14.3635 5.36353L8.36353 11.3635V12.6363L14.3635 18.6363L15.6363 17.3635L10.2727 11.9999Z"
      fill={color}
    />
  </svg>
);

export default allIcon;
