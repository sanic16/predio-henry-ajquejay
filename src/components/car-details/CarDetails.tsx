import { Car } from "@prisma/client";

interface CarDetailsProps {
  car: Car;
}

const CarDetails: React.FC<CarDetailsProps> = ({ car }) => {
  return (
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
  );
};

export default CarDetails;
