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
      d="M11.9999 7.57276L3.63632 15.9364L2.36353 14.6636L11.3635 5.66357H12.6363L21.6363 14.6636L20.3635 15.9364L11.9999 7.57276Z"
      fill={color}
    />
  </svg>
);

export default allIcon;
