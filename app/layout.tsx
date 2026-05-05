import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

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
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow pt-[5.5rem] md:pt-24">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}