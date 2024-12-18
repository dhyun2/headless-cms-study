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
      d="M11.9999 9.97266L6.63632 15.3363L5.36353 14.0635L11.3635 8.06348H12.6363L18.6363 14.0635L17.3635 15.3363L11.9999 9.97266Z"
      fill={color}
    />
  </svg>
);

export default allIcon;
