import React from 'react';
import '../../stylesheets/loader/loader.css';

function Loader() {
  return (
    <div className="flex items-center content-center justify-center w-full h-full">
      {/* <div className="loader"></div> */}
      <div className="scale-150 dot-spin xxs:scale-100 md:scale-125 lg:scale-150"></div>
    </div>
  );
}
export default Loader;
