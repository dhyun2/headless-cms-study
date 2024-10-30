import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_877)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.9001 4V12.5272L15.6637 9.7636L16.9365 11.0364L12.6365 15.3364H11.3637L7.0637 11.0364L8.33649 9.7636L11.1001 12.5272V4H12.9001ZM5.9001 19.1V15H4.1001V20L5.0001 20.9H19.0001L19.9001 20V15H18.1001V19.1H5.9001Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_877">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
