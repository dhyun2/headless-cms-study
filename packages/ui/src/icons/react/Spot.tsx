import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_914)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0001 3.9001C8.63166 3.9001 5.9001 6.63365 5.9001 10.0031C5.9001 11.3835 6.36797 12.724 7.22711 13.804L12.0001 19.8044L16.7731 13.804C17.6322 12.724 18.1001 11.3835 18.1001 10.0031C18.1001 6.63365 15.3685 3.9001 12.0001 3.9001ZM4.1001 10.0031C4.1001 5.64054 7.63655 2.1001 12.0001 2.1001C16.3636 2.1001 19.9001 5.64054 19.9001 10.0031C19.9001 11.7902 19.2945 13.5258 18.1818 14.9246L12.7044 21.8104H11.2958L5.81843 14.9246C4.70573 13.5258 4.1001 11.7902 4.1001 10.0031ZM12.0001 8.4001C11.1164 8.4001 10.4001 9.11644 10.4001 10.0001C10.4001 10.8838 11.1164 11.6001 12.0001 11.6001C12.8838 11.6001 13.6001 10.8838 13.6001 10.0001C13.6001 9.11644 12.8838 8.4001 12.0001 8.4001ZM8.6001 10.0001C8.6001 8.12233 10.1223 6.6001 12.0001 6.6001C13.8779 6.6001 15.4001 8.12233 15.4001 10.0001C15.4001 11.8779 13.8779 13.4001 12.0001 13.4001C10.1223 13.4001 8.6001 11.8779 8.6001 10.0001Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_914">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
