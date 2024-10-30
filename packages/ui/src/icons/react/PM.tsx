import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_10636_1254)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.1002 5.15816V2H12.9002V5.15816C14.1323 5.31867 15.2624 5.80424 16.2014 6.526L18.4349 4.29251L19.7077 5.5653L17.4742 7.79879C18.196 8.73782 18.6815 9.86784 18.842 11.1H22.0002V12.9H18.842C18.6871 14.0884 18.2298 15.1817 17.5503 16.1H22.0002V17.9H2.00024V16.1H6.45005C5.77063 15.1817 5.31327 14.0884 5.15839 12.9H2.00024V11.1H5.15836C5.31886 9.86783 5.80444 8.7378 6.52622 7.79876L4.29281 5.56535L5.5656 4.29256L7.79902 6.52598C8.73803 5.80423 9.86805 5.31867 11.1002 5.15816ZM8.96638 16.1H15.034C16.2892 15.1695 17.1002 13.6793 17.1002 12C17.1002 9.18335 14.8168 6.9 12.0002 6.9C9.18354 6.9 6.90019 9.18335 6.90019 12C6.90019 13.6793 7.71116 15.1695 8.96638 16.1ZM16.0002 21.9H8.00024V20.1H16.0002V21.9Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_10636_1254">
        <rect width={`${size}px`} height={`${size}px`} rx="5" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
