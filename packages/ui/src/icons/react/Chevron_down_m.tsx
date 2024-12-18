import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.0001 14.0271L17.3637 8.66349L18.6365 9.93628L12.6365 15.9363H11.3637L5.36368 9.93628L6.63648 8.66349L12.0001 14.0271Z"
      fill={color}
    />
  </svg>
);

export default allIcon;
