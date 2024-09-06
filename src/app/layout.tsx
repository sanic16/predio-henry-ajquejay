import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderSticky from "@/components/headers/HeaderSticky";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer/Footer";
import { CarsContextProvider } from "@/context/cars-context";
import prisma from "@/lib/prisma";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cars = await prisma.car.findMany({});
  return (
    <html lang="en">
      <body className={inter.className}>
        <CarsContextProvider initialCars={cars}>
          <HeaderSticky />
          <main className="custom-container">{children}</main>
          <Footer />
        </CarsContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
