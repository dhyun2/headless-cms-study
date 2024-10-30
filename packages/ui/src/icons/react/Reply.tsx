import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_880)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0001 4.4001C7.80273 4.4001 4.4001 7.80273 4.4001 12.0001C4.4001 13.2455 4.6994 14.4182 5.22884 15.4538L5.31002 16.04L4.64746 19.3528L7.95933 18.6904L8.54555 18.7716C9.58101 19.3011 10.7543 19.6001 12.0001 19.6001C16.1975 19.6001 19.6001 16.1975 19.6001 12.0001C19.6001 7.80273 16.1975 4.4001 12.0001 4.4001ZM2.6001 12.0001C2.6001 6.80862 6.80862 2.6001 12.0001 2.6001C17.1916 2.6001 21.4001 6.80862 21.4001 12.0001C21.4001 17.1916 17.1916 21.4001 12.0001 21.4001C10.5766 21.4001 9.22492 21.0831 8.01374 20.5152L3.67668 21.3826L2.61765 20.3236L3.48525 15.9856C2.9175 14.7748 2.6001 13.4236 2.6001 12.0001Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_880">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
