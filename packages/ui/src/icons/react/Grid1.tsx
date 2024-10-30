import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_918)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 4.9001L3 4.9001L3 3.1001L21 3.1001L21 4.9001ZM4.9 8.9001L4.9 15.1001L19.1 15.1001L19.1 8.9001L4.9 8.9001ZM4 7.1001L20 7.1001L20.9 8.0001L20.9 16.0001L20 16.9001L4 16.9001L3.1 16.0001L3.1 8.0001L4 7.1001ZM21 20.9001L3 20.9001L3 19.1001L21 19.1001L21 20.9001Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_918">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
