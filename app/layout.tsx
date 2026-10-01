import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollReveal from "./components/ScrollReveal";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://winnersbaptistchurch.org"),
  title: "Winners Baptist Church, Gbagada",
  description: "Winners Baptist Church, Gbagada - A body devoted to the work of God",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} font-sans min-h-screen bg-white text-ink flex flex-col overflow-x-hidden`}>
        <Navbar />
        <main className="flex-grow pt-[4.75rem]">{children}</main>
        <Footer />
        <ScrollToTopButton />
        <ScrollReveal />
      </body>
    </html>
  );
}
