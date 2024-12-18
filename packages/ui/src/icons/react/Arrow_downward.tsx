import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_938)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.9 17.1273L18.6636 11.3637L19.9364 12.6365L12.6364 19.9365H11.3636L4.0636 12.6365L5.33639 11.3637L11.1 17.1273V4.00013H12.9L12.9 17.1273Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_938">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
