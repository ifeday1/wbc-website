import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Winners Baptist Church, Bariga",
  description: "Winners Baptist Church, Bariga - A body devoted to the work of God",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-50 text-gray-900 flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-[5.5rem] md:pt-24">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}