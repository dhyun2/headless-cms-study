import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_941)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.1001 4.0001L4.0001 3.1001H20.0001L20.9001 4.0001V17.3729L17.3729 20.9001H4.0001L3.1001 20.0001V4.0001ZM4.9001 4.9001V19.1001H16.1001V17.0001L17.0001 16.1001H19.1001V4.9001H4.9001ZM8.10008 11.0001V7.0001H9.90008V11.0001H8.10008ZM14.1 11.0001V7.0001H15.9001V11.0001H14.1ZM8.24083 12.6398C8.87433 14.0897 10.3202 15.1001 12.0001 15.1001C13.6799 15.1001 15.1258 14.0897 15.7593 12.6398L17.4087 13.3604C16.4991 15.4423 14.4208 16.9001 12.0001 16.9001C9.5793 16.9001 7.50101 15.4423 6.5914 13.3604L8.24083 12.6398Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_941">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
