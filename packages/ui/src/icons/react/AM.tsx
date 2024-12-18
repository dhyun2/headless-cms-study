import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_10636_1253)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.0999 5.15816V2H12.8999V5.15816C14.1321 5.31867 15.2621 5.80424 16.2012 6.526L18.4346 4.29251L19.7074 5.5653L17.4739 7.79879C18.1957 8.73782 18.6813 9.86784 18.8418 11.1H21.9999V12.9H18.8418C18.6813 14.1322 18.1957 15.2622 17.4739 16.2012L19.7074 18.4347L18.4346 19.7075L16.2012 17.474C15.2621 18.1958 14.1321 18.6813 12.8999 18.8418V22H11.0999V18.8418C9.86779 18.6813 8.73777 18.1958 7.79874 17.474L5.5653 19.7074L4.29251 18.4346L6.52595 16.2012C5.80419 15.2622 5.31862 14.1322 5.15811 12.9H2V11.1H5.15811C5.31862 9.86783 5.8042 8.7378 6.52597 7.79876L4.29256 5.56535L5.56535 4.29256L7.79877 6.52598C8.73779 5.80423 9.86781 5.31867 11.0999 5.15816ZM11.9999 6.9C9.1833 6.9 6.89995 9.18335 6.89995 12C6.89995 14.8167 9.1833 17.1 11.9999 17.1C14.8166 17.1 17.0999 14.8167 17.0999 12C17.0999 9.18335 14.8166 6.9 11.9999 6.9Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_10636_1253">
        <rect width={`${size}px`} height={`${size}px`} rx="5" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
