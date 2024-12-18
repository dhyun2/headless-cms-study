import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_945)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.0001 15.9L3.1001 15L3.1001 8.99997L4.0001 8.09997L9.08346 8.09997L15.4366 2.99822L16.9001 3.69996L16.9001 20.3L15.4366 21.0017L9.08346 15.9L4.0001 15.9ZM4.9001 14.1L9.4001 14.1L9.96362 14.2982L15.1001 18.423L15.1001 5.57696L9.96362 9.70171L9.4001 9.89997L4.9001 9.89997L4.9001 14.1ZM20.9001 8.99997L20.9001 15L19.1001 15L19.1001 8.99997L20.9001 8.99997Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_945">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
