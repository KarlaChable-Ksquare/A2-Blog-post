import React from 'react';
import {AiOutlineTablet} from 'react-icons/ai';

function ButtonNavbar({onClick}) {
  return (
    <button
      className="relative inline-flex items-center justify-center text-white rounded-md"
      type="button"
      onClick={onClick}>
      <AiOutlineTablet className="w-8 h-8" />
    </button>
  );
}

export default ButtonNavbar;
