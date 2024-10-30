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
      d="M16.4272 11.9999L8.06363 3.63632L9.33643 2.36353L18.3364 11.3635V12.6363L9.33643 21.6363L8.06363 20.3635L16.4272 11.9999Z"
      fill={color}
    />
  </svg>
);

export default allIcon;
