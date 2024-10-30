import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_901)">
      <path
        d="M7.69517 16.313C6.50398 15.1218 5.90861 13.5624 5.90852 12L4.10852 12C4.10863 14.0203 4.88009 16.0435 6.42238 17.5858C9.50752 20.6709 14.5095 20.6709 17.5947 17.5858C17.6659 17.5145 17.7355 17.4422 17.8035 17.369L17.8035 19.2479L19.6035 19.2478L19.6034 15.0148L18.7034 14.1148H14.4608V15.9148L16.6868 15.9148C16.5721 16.0515 16.4505 16.1843 16.3219 16.313C13.9397 18.6952 10.0774 18.6952 7.69517 16.313Z"
        fill={color}
      />
      <path
        d="M6.11123 4.75547V6.74269C6.21123 6.6307 6.31494 6.5209 6.42238 6.41347C9.50752 3.32832 14.5095 3.32832 17.5947 6.41347C19.1372 7.95597 19.9086 9.97951 19.9085 12L18.1085 12C18.1086 10.4373 17.5132 8.87762 16.3219 7.68626C13.9397 5.30406 10.0774 5.30406 7.69517 7.68626C7.56223 7.8192 7.43677 7.95665 7.31877 8.09811H9.45387V9.89811H5.21123L4.31123 8.99811V4.75547H6.11123Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_901">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
