import './globals.css';
import localFont from 'next/font/local';
import type { Metadata } from 'next';

import { Navbar } from '@/components/navigation';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'PIA Criptografía',
  description: 'Implementación del cifrado RSA y el cifrado por transposición',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <Navbar />
        <main className="w-full container my-8">{children}</main>
        <footer className="container grid justify-items-center text-center my-4">
          <p className="text-xs uppercase">
            Licenciatura en Ciencias Computacionales
          </p>
          <p className="text-lg font-semibold">
            Elaborado por Áxell Zúñiga Puch (1949989), Grupo N31
          </p>
        </footer>
      </body>
    </html>
  );
}
