import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_935)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.87279 12.9001L12.6364 18.6637L11.3636 19.9365L4.0636 12.6365V11.3637L11.3636 4.06372L12.6364 5.33651L6.87279 11.1001H20V12.9001H6.87279Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_935">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
