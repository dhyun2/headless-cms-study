import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_912)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.1 11.1V5H12.9V11.1L19 11.1V12.9L12.9 12.9L12.9 19H11.1L11.1 12.9H5V11.1L11.1 11.1Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_912">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
