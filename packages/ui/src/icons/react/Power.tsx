import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_7553_676)">
      <path
        d="M12.0001 20.1C15.9213 20.1 19.1001 16.9212 19.1001 13C19.1001 10.1509 17.4219 7.69371 15.0001 6.56307V4.61829C18.4394 5.84943 20.9001 9.13735 20.9001 13C20.9001 17.9153 16.9154 21.9 12.0001 21.9C7.08476 21.9 3.1001 17.9153 3.1001 13C3.1001 9.13735 5.56078 5.84943 9.0001 4.61829V6.56307C6.57828 7.69371 4.9001 10.1509 4.9001 13C4.9001 16.9212 8.07888 20.1 12.0001 20.1Z"
        fill={color}
      />
      <path d="M12.9001 2L11.1001 2V12H12.9001V2Z" fill={color} />
    </g>
    <defs>
      <clipPath id="clip0_7553_676">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
