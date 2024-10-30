import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_11642_22584)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 5.1001L21 5.1001L21 6.9001L8 6.9001L8 5.1001Z"
        fill="#FF8239"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.5 11.1001L13.5 11.1001L13.5 12.9001L5.5 12.9001L5.5 11.1001Z"
        fill="#FF4848"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 17.1001L16 17.1001L16 18.9001L3 18.9001L3 17.1001Z"
        fill="#2272ED"
      />
    </g>
    <defs>
      <clipPath id="clip0_11642_22584">
        <rect width={`${size}px`} height={`${size}px`} rx="5" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
