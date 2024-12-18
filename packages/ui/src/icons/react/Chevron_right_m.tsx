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
      d="M13.727 11.9999L8.36344 6.63632L9.63623 5.36353L15.6362 11.3635V12.6363L9.63623 18.6363L8.36344 17.3635L13.727 11.9999Z"
      fill={color}
    />
  </svg>
);

export default allIcon;
