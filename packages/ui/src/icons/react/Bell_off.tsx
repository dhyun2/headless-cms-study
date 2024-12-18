import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_948)">
      <path
        d="M9.42094 4.59815C9.95116 4.38434 10.514 4.23449 11.1 4.15816V2H12.9V4.15816C16.2855 4.59917 18.9 7.49426 18.9 11V14.0772L17.1 12.2772V11C17.1 8.18335 14.8167 5.9 12 5.9C11.6054 5.9 11.2213 5.94481 10.8524 6.02963L9.42094 4.59815Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.80129 5.52408C7.80046 5.52472 7.79963 5.52536 7.79879 5.526L5.1364 2.8636L3.8636 4.1364L6.526 6.79879C5.63169 7.96231 5.1 9.41906 5.1 11V16.1H3V17.9H17.6272L19.8636 20.1364L21.1364 18.8636L20.1728 17.9H20.1772L17.1 14.8228V14.8272L9.08643 6.81363C9.08729 6.81303 9.08816 6.81243 9.08903 6.81182L7.80129 5.52408ZM6.9 11C6.9 9.91675 7.23773 8.91237 7.81363 8.08643L15.8272 16.1H6.9V11Z"
        fill={color}
      />
      <path d="M21 16.1772V16.1H20.9228L21 16.1772Z" fill={color} />
      <path d="M14 21.9V20.1H10V21.9H14Z" fill={color} />
    </g>
    <defs>
      <clipPath id="clip0_6908_948">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
