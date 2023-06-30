'use client';
import React, {useState} from 'react';
import DirectorioCard from './DirectorioCard.jsx';
import Searcher from './Searcher.jsx';

function DirectorioScreen({data}) {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <div className="">
      <Searcher {...{data, setFilteredData}} />
      <div className="min-h-full px-2 py-4">
        <div className="grid grid-cols-2 xl:grid-cols-3 mt-20 mx-1 ">
          {filteredData.map(element => {
            return <DirectorioCard key={element._uid} element={element} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default DirectorioScreen;
