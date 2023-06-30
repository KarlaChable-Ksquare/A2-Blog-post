import React from 'react';
import Imagen from 'components/common/Image';

function Infografia({src1, alt1, src2, alt2}) {
  return (
    <div className="grid h-auto grid-cols-2 gap-x-8 3xl:my-10 md:my-8 xxs:my-4 place-items-center mdlg:grid-cols-2 xxs:grid-cols-1">
      <Imagen src={src1} alt={alt1} />
      <Imagen src={src2} alt={alt2} />
    </div>
  );
}

export default Infografia;
