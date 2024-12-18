import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_897)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.1 5.1H3L3 6.9H5.1L5.1 20L6 20.9H18L18.9 20V6.9H21V5.1L12.9 5.1L12.9 3L11.1 3L11.1 5.1ZM17.1 6.9L6.9 6.9L6.9 19.1H17.1V6.9ZM9.1 16V10H10.9V16H9.1ZM13.1 16L13.1 10H14.9L14.9 16H13.1Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_897">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
