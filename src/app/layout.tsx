import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Página Pessoal - Aureliano A. de Oliveira",
  description: "Bem-vindo ao meu portfólio online!",	
  icons: {
    icon: "favicon.ico",
  },
  openGraph: {
    title: "Página Pessoal e Portfólio - Aureliano Oliveira",
    description: "Bem-vindo ao meu portfólio online!",
    url: "https://aureliano-oliveira.vercel.app",
    images: [
      {
        url: "/media/Logo.jpeg"
      }  
    ],
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
