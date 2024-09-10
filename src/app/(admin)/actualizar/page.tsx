import CarList from "@/components/admin/CarList";
import prisma from "@/lib/prisma";
import React, { Suspense } from "react";

export default async function UpdatePage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CarList />
      </Suspense>
    </div>
  );
}
