import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_8583_43593)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.09998 4.0001L3.99998 3.1001H16L16.9 4.0001V16.0001L16 16.9001H3.99998L3.09998 16.0001V4.0001ZM20.9 7.0001V20.0001L20 20.9001H6.99998V19.1001H19.1V7.0001H20.9Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_8583_43593">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
