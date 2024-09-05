import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderSticky from "@/components/headers/HeaderSticky";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderSticky />
        <main className="custom-container">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
