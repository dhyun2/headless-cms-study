import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.89998 12.556V19.0991H19.1V12.556L12 5.01227L4.89998 12.556ZM3.3446 11.5823L11.3446 3.08228H12.6554L20.6554 11.5823L20.9 12.1991V19.9991L20 20.8991H3.99998L3.09998 19.9991V12.1991L3.3446 11.5823ZM9.49998 16.8999V15.0999H14.5V16.8999H9.49998Z"
      fill={color}
    />
  </svg>
);

export default allIcon;
