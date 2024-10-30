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
      d="M12 3.9001C7.52647 3.9001 3.89998 7.52659 3.89998 12.0001C3.89998 16.4736 7.52647 20.1001 12 20.1001C16.4735 20.1001 20.1 16.4736 20.1 12.0001C20.1 7.52659 16.4735 3.9001 12 3.9001ZM2.09998 12.0001C2.09998 6.53248 6.53236 2.1001 12 2.1001C17.4676 2.1001 21.9 6.53248 21.9 12.0001C21.9 17.4677 17.4676 21.9001 12 21.9001C6.53236 21.9001 2.09998 17.4677 2.09998 12.0001ZM9.39997 8.2001L10.8116 7.45964L16.3116 11.2596V12.7406L10.8116 16.5406L9.39997 15.8001V8.2001ZM11.2 9.91583V14.0844L14.2167 12.0001L11.2 9.91583Z"
      fill={color}
    />
  </svg>
);

export default allIcon;
