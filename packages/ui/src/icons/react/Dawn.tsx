import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_923)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 5.9001C8.63106 5.9001 5.9 8.63116 5.9 12.0001C5.9 13.5788 6.49871 15.0163 7.48328 16.1001H16.5167C17.5013 15.0163 18.1 13.5788 18.1 12.0001C18.1 8.63116 15.3689 5.9001 12 5.9001ZM18.7539 16.1001C19.4808 14.9049 19.9 13.5011 19.9 12.0001C19.9 7.63705 16.363 4.1001 12 4.1001C7.63695 4.1001 4.1 7.63705 4.1 12.0001C4.1 13.5011 4.51915 14.9049 5.24608 16.1001H2V17.9001H22V16.1001H18.7539ZM16 20.1001V21.9001H8V20.1001H16Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_923">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
