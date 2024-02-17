import React, { useState } from 'react';

export function Popover({ content, children }) {
  const [showPopover, setShowPopover] = useState(false);

  const handleMouseEnter = () => {
    setShowPopover(true);
  };

  const handleMouseLeave = () => {
    setShowPopover(false);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', display: 'inline-block', cursor:"pointer" }}
    >
      {children}
      {showPopover && (
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '5px',
            borderRadius: '5px',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            
          }}
        >
          {content}
        </div>
      )}
    </span>
  );
}
