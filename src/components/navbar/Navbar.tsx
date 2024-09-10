"use client";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
        bgOnScroll ? "bg-gray-800/80" : "bg-gray-800"
      }`}
    >
      <div className="mx-4 flex items-center justify-between">
        <Link href="/" className={cn("text-4xl", oswald.className)}>
          HenryCars
        </Link>

        <div>
          <ul className="flex gap-4 items-center">
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

          <button className="hidden"></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
