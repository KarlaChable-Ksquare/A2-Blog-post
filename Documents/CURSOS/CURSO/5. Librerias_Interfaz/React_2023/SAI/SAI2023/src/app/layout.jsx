import React from 'react';
import '../globals.css';
import {Montserrat} from 'next/font/google';
import Navbar from 'components/home/Navbar';

const montserrat = Montserrat({
  subsets: ['latin'],
  // weights: [100, 200, 300, 400, 500, 600, 700],
  // styles: ['normal', 'italic', 'bold'],
});

export const metadata = {
  title: 'SAI IEPAC',
  description: 'Sistema de Aplicaciones del IEPAC',
  keywords: 'IEPAC, Sistema, Aplicaciones',
  author: 'Informatica',
  icon: '/favicon.ico',
};

export default function RootLayout({children}) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
