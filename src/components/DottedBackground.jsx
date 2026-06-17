import React from 'react';

const DottedBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        backgroundImage:
          'radial-gradient(circle, rgba(148, 163, 184, 0.18) 1.2px, transparent 1.2px)',
        backgroundSize: '22px 22px',
      }}
    />
  );
};

export default DottedBackground;
