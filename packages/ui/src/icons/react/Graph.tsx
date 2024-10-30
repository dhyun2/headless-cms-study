import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_9053_1703)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.1001 20V3H4.9001V19.1H21.0001V20.9H4.0001L3.1001 20ZM12.4001 11.2728L9.03649 14.6364L7.7637 13.3636L11.7637 9.3636H13.0365L16.4001 12.7272L19.7637 9.3636L21.0365 10.6364L17.0365 14.6364H15.7637L12.4001 11.2728Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_9053_1703">
        <rect width={`${size}px`} height={`${size}px`} rx="5" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
