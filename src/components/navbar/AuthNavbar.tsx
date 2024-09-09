import Link from "next/link";
import { Button } from "../ui/button";
import { auth, signOut } from "@/auth";

const AuthNavbar = async () => {
  const session = await auth();
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
            <Link href="/perfil" className="hover:text-gray-400">
              Perfil
            </Link>
          </li>
          <li>
            <Link href="/crear" className="hover:text-gray-400">
              Crear
            </Link>
          </li>
          <li>
            <Link href="/actualizar" className="hover:text-gray-400">
              Actualizar
            </Link>
          </li>
        </ul>

        <div>
          <form
            action={async () => {
              "use server";
              await signOut({
                redirectTo: "/auth/login",
              });
            }}
          >
            <Button type="submit" variant="secondary">
              Cerrar sesión
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthNavbar;
