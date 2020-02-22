import React from 'react';
import Option from './Option'

const Canvas = () => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    version="1.1"
    viewBox="0 0 588.3 959.7"
    xmlSpace="preserve"
    height="94vh"

      >
      <path fill="#73D216" d="M87.9 120.5h407.2c7.3 0 13.2 4.1 13.2 9.2v258.4c0 5.1-5.9 9.2-13.2 9.2H87.9c-7.3 0-13.2-4.1-13.2-9.2V129.7c0-5.1 5.9-9.2 13.2-9.2z">
      </path>

    </svg>
    <Option/>
  );
};

export default Canvas;
