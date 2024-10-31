import React from 'react';
import './BlogStyle.css';

function AdSpace({ position }) {
  return (
    <div className={`ad-space ad-space-${position}`}>
      <div className="ad-placeholder">
        
      </div>
    </div>
  );
}

export default AdSpace;