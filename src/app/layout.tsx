import type { Metadata } from "next";
import { Work_Sans, Lato, Chewy } from 'next/font/google';
import "./globals.css";

const chewy = Chewy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-chewy',
  display: 'swap',
});
const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400'],
  variable: '--font-lato',
  display: 'swap',
});
const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans', 
  display: 'swap',
});

export const metadata: Metadata = {
  title: "D'minis",
  description: "Deliciosas mini donnas en Florencia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chewy.variable} ${workSans.variable} ${lato.variable} ${lato.className}`}>{children}</body>
    </html>
  );
}
