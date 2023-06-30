//import React from 'react';

//Asi llego de nuetro App.jsx, imitando js a html
// const Pet = propiedad => {
//   return React.createElement('div', {}, [
//     React.createElement('h1', {}, propiedad.name),
//     React.createElement('h2', {}, propiedad.especie),
//     React.createElement('h2', {}, propiedad.raza),
//   ]);
// };

import { Link } from "react-router-dom";

//Creamos Pet como un html directamente
const Pet = (propiedad) => {
  const { name, animal, breed, images, location, id } = propiedad;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <div>
      {/* Cambiamos a por link para navegacion en router */}
      <Link to={`/details/${id}`} className="relative block ">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="to transparent absolute bottom-0 left-0 bg-gradient-to-tr from-white pr-2 pt-2">
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
        </div>
      </Link>
    </div>
  );
};
export default Pet;
