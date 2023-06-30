import React from 'react';

function FolletoInfo({title, textColor, borderDiv, mapeo}) {
  return (
    <div className="w-full mt-10 md:my-4 xxs:my-2">
      <h2 className={style.styleH2 + textColor}>{title}</h2>
      <div className={style.styleDiv + borderDiv}>
        <ul className="text-xl text-left text-black 3xl:px-6 3xl:pt-4 3xl:pb-4 xxs:p-3 md:p-4 2xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm xxs:text-sm opacity-60">
          {mapeo}
        </ul>
      </div>
    </div>
  );
}

const style = {
  styleH2:
    'text-xl font-semibold xl:text-3xl lg:text-2xl md:text-xl sm:text-md xs:text-md xxs:text-md drop-shadow-2xl ',
  styleDiv:
    'w-full h-auto border-4 rounded-lg 2xl:my-4 lg:my-2 xxs:my-1 bg-opacity-40 bg-lighter backdrop-blur-md ',
};

export default FolletoInfo;
