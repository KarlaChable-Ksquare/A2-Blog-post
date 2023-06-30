'use client';
import React from 'react';
import ElementCard from './home/ElementCard.jsx';
import data from '../json/carousel/carousel.json';

function Programs() {
  return (
    <div className="grid px-8 py-6 mb-32 text-center bg-white border rounded-lg lg:mb-0 lg:grid-cols-4 lg:text-right md:grid-cols-1 md:px-14 md:mx-4 border-primary-50">
      {data.map(element => {
        return (
          <ElementCard
            key={element._uid}
            title={element.title}
            description={element.description}
            image={element.img}
            link={element.link}
          />
        );
      })}
    </div>
  );
}

export default Programs;

/*
{data.map(element => (
        <Elemento
          key={element._uid}
          title={element.title}
          description={element.description}
          image={element.img}
          link={element.link}
        />
      ))}
*/
