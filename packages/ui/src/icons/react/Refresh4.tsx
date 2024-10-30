import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_903)">
      <path
        d="M7.68736 7.68675C10.0696 5.30455 13.9319 5.30455 16.3141 7.68675C18.6963 10.0689 18.6963 13.9313 16.3141 16.3134C13.9319 18.6956 10.0696 18.6956 7.68736 16.3134C7.5586 16.1847 7.43686 16.0517 7.32212 15.9149L9.54884 15.9149V14.1149L5.30624 14.1149L4.40624 15.0149L4.4062 19.2479L6.2062 19.2479L6.20621 17.37C6.27404 17.4431 6.34349 17.5152 6.41456 17.5862C9.49971 20.6714 14.5017 20.6714 17.5869 17.5862C20.672 14.5011 20.672 9.4991 17.5869 6.41395C14.5017 3.32881 9.49971 3.32881 6.41456 6.41395C4.87217 7.95635 4.10071 9.9797 4.10071 12.0001H5.90071C5.90071 10.4376 6.49608 8.87802 7.68736 7.68675Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_903">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
