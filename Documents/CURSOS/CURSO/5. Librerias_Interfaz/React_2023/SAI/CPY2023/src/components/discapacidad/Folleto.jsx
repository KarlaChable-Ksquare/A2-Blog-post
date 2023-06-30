import React from 'react';
import FolletoInfo from 'components/common/FolletoInfo';
import DownloadIcon from 'components/common/DownloadIcon';

function Folleto() {
  return (
    <div className="w-full mt-10 md:my-4 xxs:my-2">
      <FolletoInfo
        title={docs[0].title}
        textColor="text-disca-200"
        borderDiv="border-disca-100"
        mapeo={docs.map(archivo => (
          <li
            key={archivo.id}
            className="flex flex-cols-2 hover:text-disca-200 3xl:text-3xl xl:text-xl lg:text-lg mdlg:text-mdlg sm:text-sm xs:text-xs xxs:text-xs">
            <DownloadIcon colorIcon="text-disca-100" />
            <a
              className="ml-2 w-11/12"
              href={archivo.href}
              rel="noreferrer"
              referrerPolicy="no-referrer"
              target="_blank"
              type="text/pdf">
              <p>{archivo.title}</p>
            </a>
          </li>
        ))}
      />
    </div>
  );
}

const docs = [
  {id: 1, title: 'Folleto Informativo', href: '/documents/discapacidad/discapacidad_1.pdf'},
];

export default Folleto;
