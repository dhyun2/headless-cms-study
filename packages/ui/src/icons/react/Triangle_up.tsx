import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_9316_1509)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 9.67622L15.1722 13.8001H8.82776L12 9.67622ZM11.2866 7.65137L6.28662 14.1514L6.99998 15.6001H17L17.7133 14.1514L12.7133 7.65137H11.2866Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_9316_1509">
        <rect width={`${size}px`} height={`${size}px`} rx="5" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
