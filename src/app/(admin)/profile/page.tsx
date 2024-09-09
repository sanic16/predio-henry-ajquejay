import { auth, signOut } from "@/auth";
import { signOut as logOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default async function profile() {
  const session = await auth();
  return (
    <div>
      <div>{JSON.stringify(session)}</div>
      <div>
        <form
          action={async () => {
            "use server";
            await signOut({
              redirectTo: "/auth/login",
            });
            // await logOut({
            //   redirect: false,
            // });
          }}
        >
          <Button type="submit">Cerrar sesión</Button>
        </form>
      </div>
    </div>
  );
}
