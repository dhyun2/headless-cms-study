import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_886)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.1001 4.0001L5.0001 3.1001H15.0001L15.9001 4.0001V6.0001H14.1001V4.9001H5.9001V15.1001H7.0001V16.9001H5.0001L4.1001 16.0001V4.0001ZM8.1001 8.0001L9.0001 7.1001H19.0001L19.9001 8.0001V20.0001L19.0001 20.9001H9.0001L8.1001 20.0001V8.0001ZM9.9001 8.9001V19.1001H18.1001V8.9001H9.9001Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_886">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
