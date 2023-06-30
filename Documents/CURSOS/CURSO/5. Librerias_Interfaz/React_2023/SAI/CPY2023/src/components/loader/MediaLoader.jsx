import React from 'react';
import '../../stylesheets/loader/mediaLoader.css';

function MediaLoader() {
  return (
    <div className="flex items-center content-center justify-center">
      <div className="scale-150 dot-flashing xxs:scale-100 md:scale-125 lg:scale-150"></div>
    </div>
  );
}
export default MediaLoader;
