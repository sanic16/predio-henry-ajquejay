import BackButton from "@/components/buttons/BackButton";
import CarSlideshowThumbnails from "@/components/slideshows/CarSlideshowThumbnails";
import CarDetailsContact from "@/forms/CarDetailsContact";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageCarDetailsProps {
  params: {
    id: string;
  };
}
export default async function PageCarDetails({ params }: PageCarDetailsProps) {
  const extractedId = params.id.split("-")[2];

  const car = await prisma.car.findUnique({
    where: {
      id: extractedId,
    },
  });

  if (!car) {
    return notFound();
  }

  return (
    <div className="container mx-auto max-w-[1280px] px-2">
      <BackButton />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <CarSlideshowThumbnails images={car.images} />
        </div>
        <div className="col-span-1">
          <CarDetailsContact />
        </div>
      </div>
      <div className="mt-4">
        <div>
          <div className="w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {car.title}
              </h2>
              <div className="text-gray-600 mb-4">
                <p className="text-lg">
                  <span className="font-semibold">Modelo:</span> {car.modelMake}
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Condición:</span>{" "}
                  {car.condition === "NEW" ? "Nuevo" : "Usado"}
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Transmisión:</span>{" "}
                  {car.transmission === "AUTO"
                    ? "Automática"
                    : car.transmission === "MANUAL"
                    ? "Manual"
                    : car.transmission === "SEMI_AUTO"
                    ? "Semi-Automática"
                    : "CVT"}
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Tipo de Combustible:</span>{" "}
                  {car.engineType === "PETROL"
                    ? "Gasolina"
                    : car.engineType === "DIESEL"
                    ? "Diesel"
                    : car.engineType === "ELECTRIC"
                    ? "Eléctrico"
                    : "Híbrido"}
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Kilometraje:</span>{" "}
                  {car.mileage} km
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Ubicación:</span>{" "}
                  {car.location || "Chimaltenango"}
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Motor:</span>{" "}
                  {car.engineCapacity} L
                </p>
              </div>
            </div>
            <div className="p-6">
              <button className="py-3 px-4 bg-blue-600 text-white text-xl font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {car.price.toLocaleString("es-GT", {
                  style: "currency",
                  currency: "GTQ",
                })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const cars = await prisma.car.findMany({
    select: {
      id: true,
      modelMake: true,
      modelYear: true,
    },
  });
  return cars.map((car) => ({
    id: `${car.modelMake}-${car.modelYear}-${car.id}`,
  }));
}
