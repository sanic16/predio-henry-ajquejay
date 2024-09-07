import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1280px] bg-gray-200 p-1 text-center">
        <p className="text-sm">
          WhatsApp: 12341234 | Email: henryajquejay@gmail.com | Dirección:
          Chimaltenango
        </p>
      </div>

      <div className="container mx-auto max-w-[1280px] bg-gray-800 text-white sticky top-0 z-50">
        <ul className="flex justify-center space-x-6 py-4">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/nosotros" className="hover:text-gray-400">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="hover:text-gray-400">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
