import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_10636_1256)">
      <path
        opacity="0.98"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.09998 6.812L9.48968 6.05688L17.4897 11.245L17.4846 12.7585L9.48458 17.8704L8.09998 17.112V6.812ZM9.89998 8.46835V15.4689L15.3373 11.9945L9.89998 8.46835Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_10636_1256">
        <rect width={`${size}px`} height={`${size}px`} rx="5" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
