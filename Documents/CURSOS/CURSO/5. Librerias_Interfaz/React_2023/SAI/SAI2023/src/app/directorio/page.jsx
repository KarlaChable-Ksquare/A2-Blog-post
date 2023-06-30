import React from 'react';
import directorio from '../../json/directorio/directorio.json';
import DirectorioScreen from '../../components/directorio/DirectorioScreen';
import '../../stylesheets/directorio/directorio.css';

export default async function Directorio() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // const data = await res.json();
  //console.log(data);

  return (
    <section className="top-0 left-0 min-h-screen w-full select-none directorio">
      <div className="mx-4 mt-20">
        <DirectorioScreen data={directorio} />
      </div>
    </section>
  );
}
