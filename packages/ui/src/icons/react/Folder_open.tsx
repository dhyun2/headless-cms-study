import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_8111_3982)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.1001 5.0001L3.0001 4.1001H10.3001L10.9691 4.39803L12.5009 6.1001H20.1001L21.0001 7.0001V9.6001H21.9001L22.7635 10.754L20.2635 19.254L19.4001 19.9001H3.0001L2.1001 19.0001V5.0001ZM19.2001 9.6001V7.9001H12.1001L11.4311 7.60217L9.89927 5.9001H3.9001V16.1505L5.63667 10.2461L6.5001 9.6001H19.2001ZM5.20292 18.1001H18.7267L20.6973 11.4001H7.17351L5.20292 18.1001Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_8111_3982">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
