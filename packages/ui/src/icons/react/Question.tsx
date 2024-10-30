import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6908_929)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 3.9001C7.52647 3.9001 3.89998 7.52659 3.89998 12.0001C3.89998 16.4736 7.52647 20.1001 12 20.1001C13.9061 20.1001 15.6562 19.4428 17.0395 18.3419C17.5213 17.9585 17.9584 17.5214 18.3418 17.0397C18.5554 16.7712 18.6804 16.6015 18.8474 16.3294C19.6087 15.0886 20.1 13.5403 20.1 12.0001C20.1 7.52659 16.4735 3.9001 12 3.9001ZM2.09998 12.0001C2.09998 6.53248 6.53236 2.1001 12 2.1001C17.4676 2.1001 21.9 6.53248 21.9 12.0001C21.9 13.905 21.2989 15.7757 20.3816 17.2708C20.1643 17.625 19.9922 17.8564 19.7502 18.1605C19.2821 18.7487 18.7485 19.2823 18.1604 19.7503C16.4699 21.0957 14.3277 21.9001 12 21.9001C6.53236 21.9001 2.09998 17.4677 2.09998 12.0001ZM8.69998 10.426C8.69998 8.86531 9.96519 7.6001 11.5259 7.6001H12.5735C14.0793 7.6001 15.3 8.82078 15.3 10.3266C15.3 11.5252 14.5172 12.5832 13.371 12.9338L12.612 13.166V13.5075H10.812V12.5001L11.4487 11.6395L12.8445 11.2125C13.234 11.0934 13.5 10.7339 13.5 10.3266C13.5 9.81489 13.0852 9.4001 12.5735 9.4001H11.5259C10.9593 9.4001 10.5 9.85942 10.5 10.426H8.69998ZM12.612 14.3742V16.3001H10.812V14.3742H12.612Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_6908_929">
        <rect width={`${size}px`} height={`${size}px`} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;