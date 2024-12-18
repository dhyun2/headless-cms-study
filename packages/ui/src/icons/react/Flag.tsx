import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_928)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.89998 5.54651V13.6446C8.04559 12.9025 10.4345 13.1062 12.4465 14.256C14.1899 15.2522 16.2991 15.3305 18.1 14.4908V6.39263C15.9544 7.13482 13.5655 6.93104 11.5535 5.7813C9.81 4.78505 7.70088 4.70678 5.89998 5.54651ZM5.89998 15.584C7.70088 14.7443 9.81 14.8225 11.5535 15.8188C13.9989 17.2162 17.001 17.2162 19.4465 15.8188L19.9 15.0374V4.99989L18.5534 4.21847C16.6614 5.29966 14.3386 5.29966 12.4465 4.21847C10.001 2.82106 6.99892 2.82106 4.55345 4.21847L4.09998 4.99989V20.9999H5.89998V15.584Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_928">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
