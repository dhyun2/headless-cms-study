import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_947)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.1001 5.0001L3.0001 4.1001H21.0001L21.9001 5.0001V19.0001L21.0001 19.9001H3.0001L2.1001 19.0001V5.0001ZM3.9001 5.9001V18.1001H20.1001V5.9001H3.9001ZM7.0001 7.6001H9.0001V9.4001H7.0001V7.6001ZM11.0001 7.6001H13.0001V9.4001H11.0001V7.6001ZM15.0001 7.6001H17.0001V9.4001H15.0001V7.6001ZM7.0001 11.1001H9.0001V12.9001H7.0001V11.1001ZM11.0001 11.1001H13.0001V12.9001H11.0001V11.1001ZM15.0001 11.1001H17.0001V12.9001H15.0001V11.1001ZM7.0001 14.6001H17.0001V16.4001H7.0001V14.6001Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_947">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
