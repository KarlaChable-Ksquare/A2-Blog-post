import React from 'react';
export default function Footer() {
  return (
    <div className={styles.divFather}>
      <div className="px-2">
        <h2>Espacio de Footer</h2>
      </div>
    </div>
  );
}

/*  3xl:h-[120px] md:h-[100px] xxs:h-[88px] h-[120px] */

const styles = {
  divFather: 'h-28 2xl:h-28 md:h-24 xxs:h-14 w-full select-none bg-global-100',
};
