import React, { useEffect, useState } from 'react';
import { Range } from 'react-range';
import './Enlarge.css';

const STEP = 0.1;
const MIN = 0.5;
const MAX = 4;

const Enlarge = ({ isOpen, onClose, children }) => {
  const [zoom, setZoom] = useState(1);

  // Reset zoom when closed
  useEffect(() => {
    if (!isOpen) {
      setZoom(1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay scroll-custom" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ transform: `scale(${zoom})` }}>
        {children}
      </div>

      <div className="slider-container" onClick={(e) => e.stopPropagation()}>
        <Range
          step={STEP}
          min={MIN}
          max={MAX}
          values={[zoom]}
          onChange={(values) => setZoom(values[0])}
          renderTrack={({ props, children }) => (
            <div  {...props} className='slider-bar-cus1' >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div  {...props} className='slider-thumb-cus1' />
          )}
        />
      </div>

    </div>
  );
};

export default Enlarge;
