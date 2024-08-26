import React from 'react';

const CustomArrow = ({ className, style, onClick, direction }: { className: string, style: React.CSSProperties, onClick: () => void, direction: string }) => (
  <div
    className={`${className} ${direction} custom-arrow`}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  />
);

export default CustomArrow;
