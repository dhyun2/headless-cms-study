import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_9380_962)">
      <path d="M10.9682 12.5001L11.2309 11.4001H12.8309L12.5682 12.5001H10.9682Z" fill={color} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 2.6001C6.8085 2.6001 2.59998 6.80862 2.59998 12.0001C2.59998 13.4236 2.91738 14.7748 3.48513 15.9856L2.61753 20.3236L3.67656 21.3826L8.01362 20.5152C9.2248 21.0831 10.5765 21.4001 12 21.4001C17.1915 21.4001 21.4 17.1916 21.4 12.0001C21.4 6.80862 17.1915 2.6001 12 2.6001ZM15.0996 8.6001H13.4996L13.2369 9.7001H11.6369L11.8996 8.6001H10.3996L10.1369 9.7001H8.80583L8.39998 11.4001H9.73093L9.46824 12.5001H8.20583L7.79998 14.2001H9.06227L8.79958 15.3001H10.2996L10.5623 14.2001H12.1623L11.8996 15.3001H13.4996L13.7623 14.2001H15.0937L15.4996 12.5001H14.1682L14.4309 11.4001H15.6937L16.0996 9.7001H14.8369L15.0996 8.6001Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_9380_962">
        <rect width={`${size}px`} height={`${size}px`} rx="5" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
