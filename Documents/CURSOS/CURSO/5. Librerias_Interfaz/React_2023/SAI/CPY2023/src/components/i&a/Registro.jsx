import React from 'react';
import FolletoInfo from 'components/common/FolletoInfo';
import FormIcon from 'components/common/FormIcon';

function Registro() {
  return (
    <div className="w-full mt-10 md:my-4 xxs:my-2">
      <FolletoInfo
        title={docs[0].title}
        textColor="text-ianda-200"
        borderDiv="border-ianda-100"
        mapeo={docs.map(archivo => (
          <li
            key={archivo.id}
            className="flex flex-cols-2 hover:text-ianda-50 3xl:text-3xl xl:text-xl lg:text-lg mdlg:text-mdlg sm:text-sm xs:text-xs xxs:text-xs">
            <FormIcon colorIcon="text-ianda-100" />
            <a
              className="ml-2 w-11/12 inline-flex"
              href={archivo.href}
              rel="noreferrer"
              referrerPolicy="no-referrer"
              target="_blank"
              type="text/pdf">
              <p>{archivo.span1}</p>&nbsp;<p className="font-semibold">{archivo.span2}</p>
            </a>
          </li>
        ))}
      />
    </div>
  );
}

const docs = [
  {
    id: 1,
    title: '¡Regístrate!',
    span1: 'Regístrate para participar en la Consulta',
    span2: 'AQUÍ',
    href: 'https://forms.gle/ELjw4CeJ3dN7veCF6',
  },
];

export default Registro;
