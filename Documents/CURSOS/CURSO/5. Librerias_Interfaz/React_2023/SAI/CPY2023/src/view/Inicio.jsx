import React from 'react';
import Welcome from 'components/Inicio/Welcome';

function Inicio() {
  return (
    <section className="w-full ">
      <div className="select-none">
        <div id="Inicio" className="pt-1 3xl:pt-1 xxs:pt-0">
          <span className="sr-only">Inicio</span>
        </div>
        <Welcome />
      </div>
    </section>
  );
}
export default Inicio;
