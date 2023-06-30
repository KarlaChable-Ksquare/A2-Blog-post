import React from 'react';
import DocsList from 'components/common/DocsList';
import DownloadIcon from 'components/common/DownloadIcon';
import FormIcon from 'components/common/FormIcon';

function Observador() {
  return (
    <div className="w-full mt-10 md:my-4 xxs:my-2">
      <DocsList
        title="Observadoras y Observadores"
        textColor="text-disca-200 "
        borderDiv="border-disca-100"
        mapeo={docs.map(archivo => (
          <li
            key={archivo.id}
            className="flex mt-1 flex-cols-2 hover:text-disca-200 3xl:text-3xl xl:text-xl lg:text-lg mdlg:text-mdlg sm:text-sm xs:text-xs xxs:text-xxs">
            {archivo.propio ? (
              <FormIcon colorIcon="text-disca-100" />
            ) : (
              <DownloadIcon colorIcon="text-disca-100" />
            )}
            <a
              className="w-11/12 ml-2 "
              href={archivo.href}
              rel="noreferrer"
              referrerPolicy="no-referrer"
              target="_blank"
              type="text/pdf">
              <p>{archivo.title}</p>
              {archivo.span ? (
                <div className="select-text">
                  <p className="mt-2 hover:text-black hover:font-semibold">
                    &#x2022;&nbsp;{archivo.span[0]}
                  </p>
                  <p className="mt-2 hover:text-black hover:font-semibold">
                    &#x2022;&nbsp;{archivo.span[1]}
                  </p>
                  <p className="mt-2 hover:text-black hover:font-semibold">
                    &#x2022;&nbsp;{archivo.span[2]}
                  </p>
                </div>
              ) : (
                ''
              )}
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
    title:
      'Convocatoria para participar como Observadoras/es a la consulta previa, pública, abierta y regular, estrecha, libre e informada a personas con discapacidad en el Estado de Yucatán en materia de su participación y representación política.',
    href: '/documents/discapacidad/Convocatoria Observadorxs Discapacidad.pdf',
  },
  {
    id: 2,
    title: 'Solicitud de Acreditación y Carta Compromiso como Observadora u Observador.',
    propio: true,
  },
  {
    id: 3,
    title:
      'Para participar como Observador/a de la Consulta, puedes realizar la solicitud, de la forma siguiente:',
    span: [
      '	En la liga https://forms.gle/TFa4Uv48C4fwKVvX6 ',
      '	Al correo electrónico observanciaelectoral@iepac.mx',
      '	De forma presencial en las instalaciones del IEPAC Yucatán',
    ],
  },
];

export default Observador;

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
