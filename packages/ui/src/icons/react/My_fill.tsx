import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_8583_43458)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.9 12.0001C21.9 17.4677 17.4676 21.9001 12 21.9001C6.53236 21.9001 2.09998 17.4677 2.09998 12.0001C2.09998 6.53248 6.53236 2.1001 12 2.1001C17.4676 2.1001 21.9 6.53248 21.9 12.0001ZM7.23434 14.8278L7.95018 14.5312H16.0489L16.7648 14.8278L18.6129 16.6759C17.1461 18.7472 14.7314 20.0987 12.0001 20.0987C9.26863 20.0987 6.85301 18.7465 5.38611 16.675L7.23434 14.8278ZM12 12C13.3977 12 14.5308 10.8669 14.5308 9.4691C14.5308 8.07134 13.3977 6.93823 12 6.93823C10.6022 6.93823 9.46912 8.07134 9.46912 9.4691C9.46912 10.8669 10.6022 12 12 12Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_8583_43458">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
