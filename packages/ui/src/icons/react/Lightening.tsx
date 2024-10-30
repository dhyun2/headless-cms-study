import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_952)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.7745 2.91227L14.2212 2.1084L4.82121 12.9084L5.50008 14.3993H9.85454L8.22565 21.0863L9.77896 21.8901L19.179 11.0901L18.5001 9.59927H14.1456L15.7745 2.91227ZM13.1501 6.08079L12.1256 10.2863L13.0001 11.3993H16.5236L10.8501 17.9178L11.8745 13.7123L11.0001 12.5993H7.47657L13.1501 6.08079Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_952">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
