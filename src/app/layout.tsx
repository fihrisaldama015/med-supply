// import "@/css/style.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/css/global.css";
import { Metadata } from "next";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Med Supply | Jual Beli Alat Kesehatan",
  description:
    "Med Supply adalah platform jual beli alat kesehatan, obat-obatan, dan perlengkapan medis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
