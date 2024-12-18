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
      d="M12.0001 16.4272L20.3637 8.06363L21.6365 9.33643L12.6365 18.3364L11.3637 18.3364L2.36368 9.33643L3.63648 8.06363L12.0001 16.4272Z"
      fill={color}
    />
  </svg>
);

export default allIcon;
