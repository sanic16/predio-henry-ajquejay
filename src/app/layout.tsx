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
  title: "Venta de autos",
  description:
    "Encuentra tu próximo auto en nuestra plataforma, busca y compara precios de autos nuevos y usados.",
  keywords: [
    "autos",
    "venta",
    "compra",
    "usados",
    "nuevos",
    "carros",
    "coches",
    "autos usados",
  ],
  openGraph: {
    locale: "es_GT",
    type: "website",
    countryName: "Guatemala",
    siteName: "Venta de autos",
    images: [
      {
        hostname: "conesiee-static.codielectro.com",
        url: "https://conesiee-static.codielectro.com/openGraph/Leonardo_Phoenix_Create_a_professional_animated_scene_for_a_ca_0.jpg",
        width: 1120,
        height: 1120,
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cars = await prisma.car.findMany({});
  return (
    <html lang="es">
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
