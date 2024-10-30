import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_7234_47721)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 5.1001L4 5.1001L4 6.9001L7 6.9001L7 5.1001ZM7 11.1001L4 11.1001L4 12.9001L7 12.9001L7 11.1001ZM7 17.1001L4 17.1001L4 18.9001L7 18.9001L7 17.1001ZM20 5.1001L9 5.1001L9 6.9001L20 6.9001L20 5.1001ZM20 11.1001L9 11.1001L9 12.9001L20 12.9001L20 11.1001ZM20 17.1001L9 17.1001L9 18.9001L20 18.9001L20 17.1001Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_7234_47721">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;