import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_926)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.1001 6.0001L3.0001 5.1001H21.0001L21.9001 6.0001V18.0001L21.0001 18.9001H3.0001L2.1001 18.0001V6.0001ZM3.9001 6.9001V17.1001H15.6001V15.0001H17.4001V17.1001H20.1001V6.9001H17.4001V9.0001H15.6001V6.9001H3.9001ZM17.4001 10.5001V13.5001H15.6001V10.5001H17.4001Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_926">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
