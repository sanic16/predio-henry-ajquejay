import PageHeader from "@/components/header/PageHeader";
import CarDetailsContact from "@/forms/CarDetailsContact";
import React from "react";

export default function page() {
  return (
    <>
      <PageHeader title="Contacto" className="bg-contact-header" />
      <div className="px-2 lg:px-0 mt-8 md:mt-16">
        <div>
          <p className="text-lg text-gray-700">
            No dudes en contactarnos si tienes alguna pregunta o inquietud.
            Estamos aquí para ayudarte con lo que necesites.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-4 gap-x-4">
          <div className="bg-white shadow-md rounded-lg p-0 lg:p-4 order-2 lg:order-1">
            <CarDetailsContact
              title="Envíanos un mensaje"
              messagePlaceholder="Hola, me interesa saber más sobre..."
            />
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61759.38245132653!2d-90.866825118248!3d14.658131873597053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85896cac956dcd73%3A0x4364c6873c823822!2sChimaltenango!5e0!3m2!1sen!2sgt!4v1725742819052!5m2!1sen!2sgt"
              className="w-full h-60 flex-grow"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className="text-center text-gray-700 mt-4 p-2">
              <strong>Dirección:</strong> Calle Ejemplo 123, Chimaltenango,
              Guatemala
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
