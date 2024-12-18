import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_10668_1243)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.06677 11.3635L7.06677 7.36353L8.33956 8.63632L4.97596 11.9999L8.33956 15.3635L7.06677 16.6363L3.06677 12.6363V11.3635ZM19.0304 11.9999L15.6668 8.63632L16.9396 7.36353L20.9396 11.3635V12.6363L16.9396 16.6363L15.6668 15.3635L19.0304 11.9999Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_10668_1243">
        <rect width={`${size}px`} height={`${size}px`} rx="5" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
