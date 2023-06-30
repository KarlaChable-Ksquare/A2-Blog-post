import React from 'react';
import DocsList from 'components/common/DocsList';
import DownloadIcon from 'components/common/DownloadIcon';

function Documentos() {
  return (
    <div className="w-full mt-10 md:my-4 xxs:my-2">
      <DocsList
        title="Documentos Importantes"
        textColor="text-prior-200"
        borderDiv="border-prior-100"
        mapeo={docs.map(archivo => (
          <li
            key={archivo.id}
            className="mt-1 flex flex-cols-2 hover:text-prior-100 3xl:text-3xl xl:text-xl lg:text-lg mdlg:text-mdlg sm:text-sm xs:text-xs xxs:text-xs">
            <DownloadIcon colorIcon="text-prior-100" />
            <a
              className="ml-2 w-11/12 "
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
  {
    id: 1,
    title: 'Ficha técnica de los Círculos de Diálogo. ',
    href: '/documents/prioritario/Ficha Tecnica Circulos de Dialogo.pdf',
  },
  {
    id: 2,
    title: 'Invitación a los Círculos de Diálogo dirigido a Grupos de Atención Prioritaria.',
    href: '/documents/prioritario/Invitacion Circulos de Dialogo.pdf',
  },
];

export default Documentos;

/*
const docs = [
  {id: 1, title: 'Protocolo del proceso de consulta previa', href: ''},
  {id: 2, title: 'Etapas de la Consulta', href: ''},
  {id: 3, title: 'Cuestionario de la Consulta', href: ''},
  {id: 4, title: 'Programa de Difusión', href: ''},
  {id: 5, title: 'Sedes de la Consulta', href: ''},
  {id: 6, title: ' Convocatoria Observadora y Observador de la Consulta', href: ''},
  {
    id: 7,
    title: 'Formato de solicitud para la acreditación como Observadora u Observador',
    href: '',
  },
  {
    id: 8,
    title: 'Carta Compromiso para la solicitud de acreditación como Observadora u Observador',
    href: '',
  },
];
*/
