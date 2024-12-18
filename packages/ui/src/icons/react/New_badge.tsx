import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_8278_40269)">
      <path d="M7.5 16.5V7.5H9.84263L14.1693 13.0027V7.5H16.5V16.5H14.1693L9.84263 10.9973V16.5H7.5Z" fill={color} />
    </g>
    <defs>
      <clipPath id="clip0_8278_40269">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
