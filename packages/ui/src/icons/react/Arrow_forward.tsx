import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_936)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.1272 12.9001L11.3636 18.6637L12.6364 19.9365L19.9364 12.6365V11.3637L12.6364 4.06372L11.3636 5.33651L17.1272 11.1001H4V12.9001H17.1272Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_936">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
