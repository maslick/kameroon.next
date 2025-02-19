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

export const metadata = {
  title: "Kameroon.Next",
  description: "ZXing / ZBar based QR-code scanner",
  manifest: "/manifest.json"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <meta name="apple-mobile-web-app-title" content="Kameroon"/>
      <meta name="theme-color" content="#fffff1"/>
    </head>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    {children}
    </body>
    </html>
  );
}
