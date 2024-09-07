import PageHeader from "@/components/header/PageHeader";
import CarDetailsContact from "@/forms/CarDetailsContact";
import React from "react";

export default function page() {
  return (
    <>
      <PageHeader title="Contacto" className="bg-contact-header" />
      <div className="grid grid-cols-1 px-2 lg:px-0 md:grid-cols-2 gap-8 py-8">
        <div className="bg-white shadow-md rounded-lg p-0 lg:p-6 order-2 lg:order-1">
          <CarDetailsContact />
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61759.38245132653!2d-90.866825118248!3d14.658131873597053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85896cac956dcd73%3A0x4364c6873c823822!2sChimaltenango!5e0!3m2!1sen!2sgt!4v1725742819052!5m2!1sen!2sgt"
            className="w-full h-60 md:h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
}
