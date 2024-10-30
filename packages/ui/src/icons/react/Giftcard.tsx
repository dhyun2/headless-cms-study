import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_930)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.8551 6.6H14.1448L12 5.09859L9.8551 6.6ZM17.2837 6.6L12.5161 3.2627H11.4839L6.71628 6.6H4.99998L4.09998 7.5V10.5925L3.44697 10.2189L2.09998 11V19L2.99998 19.9H21L21.9 19V11L20.553 10.2189L19.9 10.5925V7.5L19 6.6H17.2837ZM18.1 11.6225V8.4H5.89998V11.6225L12 15.1131L18.1 11.6225ZM3.89998 12.5519V18.1H20.1V12.5519L12.447 16.9312H11.553L3.89998 12.5519Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_930">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
