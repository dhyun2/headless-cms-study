import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_876)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.9001 16.9L5.9001 21L4.1001 21L4.1001 8.00003L5.0001 7.10003L8.74575 7.10003L15.529 2.93316L16.9001 3.70003L16.9001 20.3L15.529 21.0669L8.74575 16.9L5.9001 16.9ZM5.9001 15.1L9.0001 15.1L9.47117 15.2332L15.1001 18.6909L15.1001 5.30913L9.47117 8.7669L9.0001 8.90003L5.9001 8.90003L5.9001 15.1ZM20.9001 9.00003L20.9001 15L19.1001 15L19.1001 9.00003L20.9001 9.00003Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_876">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
