import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_9316_1508)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 14.3238L8.82779 10.1999L15.1722 10.1999L12 14.3238ZM12.7134 16.3486L17.7134 9.84863L17 8.39989L7.00002 8.39989L6.28666 9.84863L11.2867 16.3486H12.7134Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_9316_1508">
        <rect width={`${size}px`} height={`${size}px`} rx="5" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
