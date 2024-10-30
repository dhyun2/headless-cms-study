import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_944)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.80109 7.52364L9.79861 7.52564L5.13649 2.86353L3.8637 4.13632L7.82731 8.09992H4.0001L3.1001 8.99992V14.9999L4.0001 15.8999H9.08346L15.4366 21.0017L16.9001 20.2999V17.1727L19.8637 20.1363L21.1365 18.8635L16.9001 14.6271V14.6226L15.1001 12.8226V12.8271L11.079 8.806L11.0815 8.80401L9.80109 7.52364ZM15.1001 15.3727L9.56817 9.84079L9.4001 9.89992H4.9001V14.0999H9.4001L9.96362 14.2982L15.1001 18.4229V15.3727Z"
        fill={color}
      />
      <path
        d="M15.1001 10.2771V5.57692L12.4933 7.67026L11.2129 6.38989L15.4366 2.99818L16.9001 3.69992V12.0771L15.1001 10.2771Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_944">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
