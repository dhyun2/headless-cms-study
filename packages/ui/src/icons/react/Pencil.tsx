import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_907)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.3636 4.36352C15.8196 2.90747 18.1803 2.90747 19.6364 4.36352C21.0924 5.81956 21.0924 8.18027 19.6363 9.63631L9.63635 19.6363L9.17646 19.8824L4.17646 20.8824L3.11743 19.8234L4.11743 14.8234L4.36356 14.3635L14.3636 4.36352ZM18.3636 5.63631C17.6105 4.88321 16.3894 4.88321 15.6363 5.63631L15.2727 5.99991L18 8.72712L18.3636 8.36352C19.1167 7.61042 19.1167 6.38941 18.3636 5.63631ZM16.7272 9.99991L14 7.2727L5.82904 15.4436L5.14723 18.8526L8.55624 18.1708L16.7272 9.99991ZM21 20.8999H12V19.0999H21V20.8999Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_907">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
