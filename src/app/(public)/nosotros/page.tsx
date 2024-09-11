import PageHeader from "@/components/header/PageHeader";
import React from "react";

export default function page() {
  return (
    <>
      <PageHeader title="Nosotros" className="bg-about-header" />
      <div className="w-full mt-8 px-2 xl:px-0">
        <div className="text-center px-2">
          <h1 className="text-4xl font-bold">¿Quiénes somos?</h1>
          <p className="text-lg mt-2">
            Somos un lote de autos pequeño en Guatemala, dedicados a ofrecer
            vehículos de calidad a nuestros clientes con honestidad y buen
            servicio.
          </p>
        </div>

        <div className="mt-8">
          <section className="bg-white shadow-md">
            <div className="py-8 px-2 lg:px-4">
              <h2 className="text-2xl font-semibold">Misión</h2>
              <p className=" mt-4">
                Nuestra misión es ayudar a nuestros clientes a encontrar el
                vehículo que mejor se ajuste a sus necesidades, ofreciendo un
                servicio personalizado y honesto.
              </p>
            </div>
          </section>

          <section className="bg-white shadow-md mt-6">
            <div className="py-8 px-2 lg:px-4">
              <h2 className="text-2xl font-semibold">Visión</h2>
              <p className="mt-4">
                Ser reconocidos en nuestra comunidad como un lote de autos
                confiable, donde cada cliente se sienta valorado y encuentre un
                vehículo de calidad.
              </p>
            </div>
          </section>

          <section className="bg-white shadow-md mt-6">
            <div className="py-8 px-2 lg:px-4">
              <h2 className="text-2xl font-semibold">Valores</h2>
              <ul className="list-disc list-inside mt-4">
                <li>
                  Honestidad: Siempre actuamos con transparencia en nuestras
                  transacciones.
                </li>
                <li>
                  Servicio al Cliente: Nos enfocamos en brindar atención
                  personalizada a cada cliente.
                </li>
                <li>
                  Calidad: Nos aseguramos de ofrecer vehículos confiables y bien
                  cuidados.
                </li>
                <li>
                  Responsabilidad: Cumplimos con nuestros compromisos y
                  respetamos a nuestros clientes.
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white shadow-md mt-6">
            <div className="py-8 px-2 lg:px-4">
              <h2 className="text-2xl font-semibold">Objetivos</h2>
              <ul className="list-disc list-inside mt-4">
                <li>
                  Aumentar gradualmente nuestra variedad de vehículos
                  disponibles.
                </li>
                <li>
                  Mejorar nuestro servicio para hacer la compra de autos más
                  fácil y cómoda.
                </li>
                <li>
                  Crear relaciones duraderas con nuestros clientes, basadas en
                  la confianza.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
