import React from 'react';

type allIconProps = {
  size?: 16 | 20 | 24 | 32;
  color?: string;
};

const allIcon: React.FC<allIconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_9380_960)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.7275 6.27253C14.5643 3.10929 9.43566 3.10929 6.27241 6.27253C3.10916 9.43578 3.10916 14.5644 6.27241 17.7277C9.43566 20.8909 14.5643 20.8909 17.7275 17.7277C20.8908 14.5644 20.8908 9.43578 17.7275 6.27253ZM4.99962 4.99974C8.86581 1.13355 15.1341 1.13355 19.0003 4.99974C22.8665 8.86593 22.8665 15.1343 19.0003 19.0005C15.1341 22.8666 8.86581 22.8666 4.99962 19.0005C1.13343 15.1343 1.13343 8.86593 4.99962 4.99974ZM9.86678 9.41L16.2307 6.58157L17.4187 7.76953L14.5903 14.1335L14.1334 14.5904L7.76941 17.4188L6.58145 16.2309L9.40988 9.86691L9.86678 9.41ZM10.5225 11.7954L9.17668 14.8236L12.2048 13.4777L10.5225 11.7954ZM13.4776 12.205L11.7953 10.5226L14.8235 9.1768L13.4776 12.205Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_9380_960">
        <rect width={`${size}px`} height={`${size}px`} rx="5" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default allIcon;
