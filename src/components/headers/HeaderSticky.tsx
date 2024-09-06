import Link from "next/link";
import React from "react";

const HeaderSticky = () => {
  return (
    <>
      <div className="navbar-container bg-gray-200 p-1 text-center">
        <p className="text-sm">
          WhatsApp: 12341234 | Email: henryajquejay@gmail.com | Dirección:
          Chimaltenango
        </p>
      </div>

      <div className="navbar-container bg-gray-800 text-white sticky top-0 z-50">
        <ul className="flex justify-center space-x-6 py-4">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Inicio
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderSticky;
