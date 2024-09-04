import CarSlideshowThumbnails from "@/components/cards-slideshow/CarSlideshowThumbnails";
import { cars_data } from "@/data/cars";
import { notFound } from "next/navigation";

interface PageCarDetailsProps {
  params: {
    id: string;
  };
}
export default function PageCarDetails({ params }: PageCarDetailsProps) {
  console.log(params.id);
  const extractedId = params.id.split("-")[2];
  const car = cars_data.find((car) => car.id === Number(extractedId));

  if (!car) {
    return notFound();
  }

  return (
    <div className="custom-container">
      <div className="grid lg:grid-cols-2 mt-4">
        <div>
          <CarSlideshowThumbnails images={car?.images} />
        </div>
        <div>
          <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Ford F150 XLT Cabina Sencilla
              </h2>
              <div className="text-gray-600 mb-4">
                <p className="text-lg">
                  <span className="font-semibold">Modelo:</span> 2019 - Ford
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Condición:</span> Usado
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Transmisión:</span> Manual
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Tipo de Combustible:</span>{" "}
                  Diesel
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Kilometraje:</span> 25,000 km
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Ubicación:</span> Antigua
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Motor:</span> Diesel, 3.0L
                </p>
              </div>
            </div>
            <div className="p-6">
              <button className="w-full py-3 bg-blue-600 text-white text-xl font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                $250,000
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const ids = cars_data.map((car) => ({
    id: `${car.model.make}-${car.model.year}-${car.id}`,
  }));
  return ids;
}
