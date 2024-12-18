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
      d="M20.1363 7.23642L10.1363 17.2364H8.86352L3.86353 12.2364L5.13632 10.9636L9.49992 15.3272L18.8635 5.96362L20.1363 7.23642Z"
      fill={color}
    />
  </svg>
);

export default allIcon;
