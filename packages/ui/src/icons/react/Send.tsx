import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_942)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.12695 4.2183L4.39273 3.19019L20.8927 11.1902V12.8098L4.39273 20.8098L3.12695 19.7817L5.07238 12L3.12695 4.2183ZM6.70278 12.9L5.34028 18.35L18.4372 12L5.34028 5.65002L6.70278 11.1H11.0001V12.9H6.70278Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_942">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
