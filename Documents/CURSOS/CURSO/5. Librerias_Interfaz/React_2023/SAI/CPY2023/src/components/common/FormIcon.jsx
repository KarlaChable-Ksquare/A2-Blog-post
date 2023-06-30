import React from 'react';
import {FaWpforms} from 'react-icons/fa';

function FormIcon({colorIcon}) {
  return <FaWpforms className={style.styleIcon + colorIcon} />;
}

const style = {
  styleIcon: 'w-1/12 3xl:h-8 md:h-6 xxs:h-4  ',
};

export default FormIcon;
