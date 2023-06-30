'use client';
import React, {useState} from 'react';
import {BiSearchAlt} from 'react-icons/bi';

function Searcher({data, setFilteredData}) {
  const [input, setInput] = useState('');

  const normalizeString = str => {
    return str?.normalize('NFD')?.replace(/[\u0300-\u036f]/g, '');
  };

  const filterData = searchText => {
    const searchTerms = searchText.trim().split(/\s+/); // Split the search text by whitespace

    return data.filter(item => {
      const fieldsToMatch = [
        'nombres',
        'apellido1',
        'apellido2',
        'unidad',
        'subunidad',
        'correo',
        'extension',
      ];

      return searchTerms.some(term => {
        const normalizedTerm = normalizeString(term);

        return fieldsToMatch.some(field =>
          new RegExp(normalizedTerm, 'i').test(normalizeString(item[field])),
        );
      });
    });
  };

  const handleSearch = e => {
    setInput(e.target.value);

    const searchResult = filterData(e.target.value);
    setFilteredData(searchResult);
  };

  return (
    <div className="fixed z-40 mb-1 top-16 h-28 w-full bg-neutral-15 dark:bg-black-100">
      <h1 className="font-semibold my-3 ml-2">Bienvenido al Directorio del IEPAC</h1>
      <div className="flex justify-around pt-2">
        <form className="flex flex-row place-items-center pl-4 pb-2 ">
          <BiSearchAlt className="m-2 fill-primary-100 dark:fill-secondary-25 scale-125" />
          <input
            className="w-[720px] lg:w-[720px] md:w-[500px] xs:w-[360px] xxs:w-[320px] px-4 py-1 mr-3 border rounded-lg border-primary-100 text-black-100 dark:border-secondary-75 focus:outline-none focus:ring-2 focus:ring-primary-100 dark:focus:ring-secondary-75"
            type="text"
            placeholder="Ingrese un dato a buscar"
            value={input}
            onChange={handleSearch}
          />
        </form>
      </div>
    </div>
  );
}

export default Searcher;
