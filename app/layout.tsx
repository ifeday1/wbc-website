import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollReveal from "./components/ScrollReveal";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://winnersbaptistchurch.org"),
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
      <body className={`${outfit.variable} font-sans min-h-screen bg-gray-50 text-gray-900 antialiased flex flex-col overflow-x-hidden`}>
        <Navbar />
        <main className="flex-grow pt-[5.5rem] md:pt-24">{children}</main>
        <Footer />
        <ScrollToTopButton />
        <ScrollReveal />
      </body>
    </html>
  );
}