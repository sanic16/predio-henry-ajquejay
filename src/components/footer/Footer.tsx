import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="custom-container pt-8 mt-12  bg-gray-800 text-white border-t-2 border-t-gray-800">
      <div className="px-4 flex flex-col gap-6 items-center text-center lg:text-left lg:flex-row lg:gap-0 lg:justify-between">
        <div className="max-w-80">
          <h3 className="text-2xl font-bold bg-gradient-text bg-clip-text text-transparent">
            Predio Henry Ajquejay
          </h3>
          <p>
            ¡Encuentra tu próximo carro con nosotros! Ofrecemos buenos precios y
            asesoría amigable. ¡Ven a visitarnos!
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Enlaces rápidos</h3>
          <div>
            <ul>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/nosotros">Acerca de nosotros</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <h3 className="text-lg font-bold">Contacto</h3>
          <p>Dirección: Calle Ejemplo 123, Ciudad</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Email: contacto@prediohenryajquejay.com</p>
        </div>
      </div>
      <p className="text-center text-sm  border-t border-t-white pt-4 pb-2 mt-4 ">
        © {new Date().getFullYear()} Predio Henry Ajquejay
      </p>
    </footer>
  );
};

export default Footer;
