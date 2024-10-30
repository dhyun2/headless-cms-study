import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_946)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.1 4.15816C7.71448 4.59917 5.1 7.49426 5.1 11V16.1H3V17.9H21V16.1H18.9V11C18.9 7.49426 16.2855 4.59917 12.9 4.15816V2H11.1V4.15816ZM17.1 16.1V11C17.1 8.18335 14.8167 5.9 12 5.9C9.18335 5.9 6.9 8.18335 6.9 11V16.1H17.1ZM14 20.1V21.9H10V20.1H14Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_946">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
