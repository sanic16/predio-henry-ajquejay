import AdminCard from "@/components/admin/AdminCard";
import CreateCarForm from "@/components/admin/CreateCarForm";
import prisma from "@/lib/prisma";
import React from "react";

interface CarUpdatePageProps {
  params: {
    id: string;
  };
}

export default async function CarUpdatePage({
  params: { id },
}: CarUpdatePageProps) {
  const car = await prisma.car.findUnique({
    where: {
      id,
    },
  });

  if (!car) return <div>Auto no encontrado!</div>;

  return (
    <AdminCard title="Crear Carro">
      <CreateCarForm car={car} />
    </AdminCard>
  );
}
