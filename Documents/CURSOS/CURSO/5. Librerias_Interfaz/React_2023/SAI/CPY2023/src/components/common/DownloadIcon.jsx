import React from 'react';
import {BsFillCloudArrowDownFill} from 'react-icons/bs';
import {AiOutlineDownload} from 'react-icons/ai';

function DownloadIcon({colorIcon}) {
  return <BsFillCloudArrowDownFill className={style.styleIcon + colorIcon} />;
}

const style = {
  styleIcon: 'w-1/12 3xl:h-8 md:h-6 xxs:h-4  ',
};

export default DownloadIcon;
