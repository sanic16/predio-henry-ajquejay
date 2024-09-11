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

  useEffect(() => {
    if (isOpen) {
      if (typeof window !== undefined) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }

    return () => {
      if (typeof window !== undefined) {
        document.body.style.overflow = "auto";
      }
    };
  }, [isOpen]);

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
          } bg-black/85 w-full h-[calc(100vh-5rem)] lg:static lg:w-auto lg:h-auto lg:bg-transparent`}
        >
          <ul className="flex h-full flex-col justify-center items-center gap-6 -mt-20 sm:-mt-4 lg:mt-0 lg:justify-start lg:flex-row  lg:h-auto lg:gap-4 lg:items-center">
            <li>
              <Link href="/" onClick={closeMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/nosotros" onClick={closeMenu}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/contacto" onClick={closeMenu}>
                Contacto
              </Link>
            </li>
            <li>
              <Link
                href="/auth/login"
                className="bg-white text-black px-4 py-2 rounded-md"
                onClick={closeMenu}
              >
                Iniciar sesión
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="block text-3xl relative z-20 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {!isOpen ? <FaBars /> : <FaTimes />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
