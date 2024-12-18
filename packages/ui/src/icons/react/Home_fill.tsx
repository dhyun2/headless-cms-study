import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_8583_43592)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.34472 11.5823L11.3447 3.08228H12.6555L20.6555 11.5823L20.9001 12.1991V19.9991L20.0001 20.8991H4.0001L3.1001 19.9991V12.1991L3.34472 11.5823ZM9.5001 16.8999V15.0999H14.5001V16.8999H9.5001Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_8583_43592">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
