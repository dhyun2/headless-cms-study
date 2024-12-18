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
      d="M16.9363 9.83627L11.6363 15.1363H10.3635L7.36353 12.1363L8.63632 10.8635L10.9999 13.2271L15.6635 8.56348L16.9363 9.83627Z"
      fill={color}
    />
  </svg>
);

export default allIcon;
