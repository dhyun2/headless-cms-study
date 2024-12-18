import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_932)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.22823 4.53705L5.99998 4.1001H18L18.7717 4.53705L21.7717 9.53705L21.9 10.0001V20.0001H19.1V17.9001H4.89998V20.0001H2.09998V10.0001L2.22823 9.53705L5.22823 4.53705ZM3.89998 16.2001L3.99998 16.1001H20L20.1 16.2001V10.9001H3.89998V16.2001ZM4.58955 9.1001H19.4104L17.4904 5.9001H6.50955L4.58955 9.1001Z"
        fill={color}
      />
      <path
        d="M17.9 13.5001C17.9 14.2733 17.2732 14.9001 16.5 14.9001C15.7268 14.9001 15.1 14.2733 15.1 13.5001C15.1 12.7269 15.7268 12.1001 16.5 12.1001C17.2732 12.1001 17.9 12.7269 17.9 13.5001Z"
        fill={color}
      />
      <path
        d="M8.89998 13.5001C8.89998 14.2733 8.27317 14.9001 7.49998 14.9001C6.72678 14.9001 6.09998 14.2733 6.09998 13.5001C6.09998 12.7269 6.72678 12.1001 7.49998 12.1001C8.27317 12.1001 8.89998 12.7269 8.89998 13.5001Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_932">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
