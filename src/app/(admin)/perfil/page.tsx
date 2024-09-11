import { Suspense } from "react";
import Profile from "./Profile";

export default async function profile() {
  return (
    <div className="px-2">
      <Suspense fallback={<div>Cargando...</div>}>
        <Profile />
      </Suspense>
    </div>
  );
}
