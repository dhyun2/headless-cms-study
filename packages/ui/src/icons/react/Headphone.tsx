import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_875)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.1001 8.0001C7.1001 5.2939 9.2939 3.1001 12.0001 3.1001C14.7063 3.1001 16.9001 5.2939 16.9001 8.0001V9.1001H20.0001L20.9001 10.0001V16.0001L20.0001 16.9001H16.9001V20.0001L16.0001 20.9001H11.0001V19.1001H15.1001V8.0001C15.1001 6.28802 13.7122 4.9001 12.0001 4.9001C10.288 4.9001 8.9001 6.28802 8.9001 8.0001V16.0001L8.0001 16.9001H4.0001L3.1001 16.0001V10.0001L4.0001 9.1001H7.1001V8.0001ZM7.1001 10.9001H4.9001V15.1001H7.1001V10.9001ZM16.9001 15.1001H19.1001V10.9001H16.9001V15.1001Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_875">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
