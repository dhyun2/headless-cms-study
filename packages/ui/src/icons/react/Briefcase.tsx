import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_927)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.1001 4.0001L7.0001 3.1001H17.0001L17.9001 4.0001V7.1001H20.0001L20.9001 8.0001V20.0001L20.0001 20.9001H4.0001L3.1001 20.0001V8.0001L4.0001 7.1001H6.1001V4.0001ZM7.9001 7.1001H16.1001V4.9001H7.9001V7.1001ZM4.9001 8.9001V12.1001H19.1001V8.9001H4.9001ZM19.1001 13.9001H16.9001V16.0001H15.1001V13.9001L8.9001 13.9001L8.9001 16.0001H7.1001V13.9001H4.9001V19.1001H19.1001V13.9001Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_927">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
