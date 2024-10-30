import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_917)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0001 3.9001C7.52659 3.9001 3.9001 7.52659 3.9001 12.0001C3.9001 16.4736 7.52659 20.1001 12.0001 20.1001C16.4736 20.1001 20.1001 16.4736 20.1001 12.0001C20.1001 7.52659 16.4736 3.9001 12.0001 3.9001ZM2.1001 12.0001C2.1001 6.53248 6.53248 2.1001 12.0001 2.1001C17.4677 2.1001 21.9001 6.53248 21.9001 12.0001C21.9001 17.4677 17.4677 21.9001 12.0001 21.9001C6.53248 21.9001 2.1001 17.4677 2.1001 12.0001Z"
        fill={color}
      />
      <path
        d="M9.0001 15.3001V8.6001H10.6001L13.4001 12.8637V8.6001H15.0001V15.3001H13.4001L10.6001 11.0365V15.3001H9.0001Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_917">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
