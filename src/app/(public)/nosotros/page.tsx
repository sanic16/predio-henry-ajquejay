import PageHeader from "@/components/header/PageHeader";
import React from "react";

export default function page() {
  return (
    <>
      <PageHeader title="Nosotros" className="bg-about-header" />
      <div className="w-full bg-gray-100 mt-4 md:mt-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">¿Quiénes somos?</h1>
          <p className="text-lg text-gray-600 mt-2">
            Somos un lote de autos pequeño en Guatemala, dedicados a ofrecer
            vehículos de calidad a nuestros clientes con honestidad y buen
            servicio.
          </p>
        </div>

        <div className="mt-8">
          <section className="bg-white shadow-md">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-700">Misión</h2>
              <p className="text-gray-600 mt-4">
                Nuestra misión es ayudar a nuestros clientes a encontrar el
                vehículo que mejor se ajuste a sus necesidades, ofreciendo un
                servicio personalizado y honesto.
              </p>
            </div>
          </section>

          <section className="bg-white shadow-md mt-6">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-700">Visión</h2>
              <p className="text-gray-600 mt-4">
                Ser reconocidos en nuestra comunidad como un lote de autos
                confiable, donde cada cliente se sienta valorado y encuentre un
                vehículo de calidad.
              </p>
            </div>
          </section>

          <section className="bg-white shadow-md mt-6">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-700">Valores</h2>
              <ul className="list-disc list-inside mt-4 text-gray-600">
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
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-700">
                Objetivos
              </h2>
              <ul className="list-disc list-inside mt-4 text-gray-600">
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
