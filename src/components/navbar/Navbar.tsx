import { signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { signOutAction } from "@/actions/auth";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1280px] bg-gray-200 p-1 text-center">
        <p className="text-sm">
          WhatsApp: 12341234 | Email: henryajquejay@gmail.com | Dirección:
          Chimaltenango
        </p>
      </div>

      <div className="container mx-auto max-w-[1280px] bg-gray-800 text-white sticky top-0 z-50 flex items-center justify-between px-4">
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

        <div>
          <Button variant="link" asChild>
            <Link
              href="/auth/login"
              className="bg-white text-black px-4 py-2 rounded-sm"
            >
              Iniciar sesión
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
