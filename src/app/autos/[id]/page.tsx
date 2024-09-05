import BackButton from "@/components/buttons/BackButton";
import CarSlideshowThumbnails from "@/components/slideshows/CarSlideshowThumbnails";
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
    <div className="custom-container">
      <BackButton />
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4">
        <div>
          <CarSlideshowThumbnails images={car.images} />
        </div>
        <div>
          <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
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
              <button className="w-full py-3 bg-blue-600 text-white text-xl font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
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
