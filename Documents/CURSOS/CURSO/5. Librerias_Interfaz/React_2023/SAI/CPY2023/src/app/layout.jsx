import React from 'react';
import '../stylesheets/globals.css';
import {Rubik} from 'next/font/google';

const rubik = Rubik({subsets: ['latin']});

export const metadata = {
  charset: 'UTF-8',
  content: 'width=device-width, initial-scale=1.0, interest-cohort=()',
  httpEquiv: 'Permissions-Policy',
  title: 'Consultas Previas Yucatán 2023',
  description: 'Necesidades de Programación para Consultas Previas Yucatán 2023',
  author: 'Informatica KLCC',
  icon: '/favicon.ico',
  keywords:
    'IEPAC, Necesidades de Programación, Consultas Previas, Yucatán 2023, 2023, Consulta, Previa, Yucatán, Indigenas, Afromexicanas, Afromexicanos, Personas con Discapacidad, discapacidad, Grupos Prioritarios',
};

export default function RootLayout({children}) {
  return (
    <html lang="es">
      <body className={rubik.className} suppressHydrationWarning={true}>
        <main className="global-screen">{children}</main>
      </body>
    </html>
  );
}
