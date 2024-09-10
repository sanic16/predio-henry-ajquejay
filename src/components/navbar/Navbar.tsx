"use client";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const oswald = Oswald({
  weight: ["600"],
  subsets: ["latin"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgOnScroll, setBgOnScroll] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const changeBgOnScroll = () => {
      if (typeof window !== undefined) {
        if (window.scrollY > 0) {
          setBgOnScroll(true);
        } else {
          setBgOnScroll(false);
        }
      }
    };

    if (typeof window !== undefined) {
      window.addEventListener("scroll", changeBgOnScroll);
    }

    return () => {
      if (typeof window !== undefined) {
        window.removeEventListener("scroll", changeBgOnScroll);
      }
    };
  }, []);

  return (
    <nav
      className={`container mx-auto max-w-[1280px] h-[5rem] grid items-center text-white fixed top-0 left-0 right-0 z-10 ${
        bgOnScroll ? "bg-gray-800/80 backdrop-blur-sm" : "bg-gray-800"
      }`}
    >
      <div className="mx-4 flex items-center justify-between">
        <Link href="/" className={cn("text-4xl flex", oswald.className)}>
          HenryCars
        </Link>

        <div
          className={`fixed left-0 ${
            isOpen ? "top-[5rem]" : "-top-[100vh]"
          } bg-black/65 backdrop-blur-md  w-full h-[calc(100vh-5rem)] lg:static lg:w-auto lg:h-auto lg:bg-transparent`}
        >
          <ul className="flex h-full flex-col justify-center items-center gap-6 lg:justify-start lg:flex-row  lg:h-auto lg:gap-4 lg:items-center">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
            <li>
              <Link
                href="/auth/login"
                className="bg-white text-black px-4 py-2 rounded-md"
              >
                Iniciar sesión
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="block text-3xl lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {!isOpen ? <FaBars /> : <FaTimes />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
