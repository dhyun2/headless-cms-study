import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_8583_43462)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.2774 2.06323L12.7224 2.06323L16.0492 6.54201L21.4068 8.27328L21.8558 9.66193L18.5597 14.1563L18.5427 19.6979L17.3711 20.5531L11.9999 18.8529L6.6288 20.5531L5.4572 19.6979L5.44015 14.1563L2.14404 9.66193L2.59305 8.27328L7.95066 6.54201L11.2774 2.06323Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_8583_43462">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
