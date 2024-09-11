import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function profile() {
  const session = await auth();
  return (
    <div>
      <div>{JSON.stringify(session)}</div>
    </div>
  );
}
