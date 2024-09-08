import { Car } from "@prisma/client";

interface CarDetailsProps {
  car: Car;
}

const CarDetails: React.FC<CarDetailsProps> = ({ car }) => {
  return (
    <div className="w-full mx-auto bg-white  rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 tracking-wider">
          {car.title} - Q {new Intl.NumberFormat().format(car.price)}
        </h2>
        <div className="mb-4">
          <p className="text-base md:text-lg">
            <span className="font-semibold">Modelo:</span> {car.modelMake}
          </p>
          <p className="text-base md:text-lg">
            <span className="font-semibold">Condición:</span>{" "}
            {car.condition === "NEW" ? "Nuevo" : "Usado"}
          </p>
          <p className="text-base md:text-lg">
            <span className="font-semibold">Transmisión:</span>{" "}
            {car.transmission === "AUTO"
              ? "Automática"
              : car.transmission === "MANUAL"
              ? "Manual"
              : car.transmission === "SEMI_AUTO"
              ? "Semi-Automática"
              : "CVT"}
          </p>
          <p className="text-base md:text-lg">
            <span className="font-semibold">Tipo de Combustible:</span>{" "}
            {car.engineType === "PETROL"
              ? "Gasolina"
              : car.engineType === "DIESEL"
              ? "Diesel"
              : car.engineType === "ELECTRIC"
              ? "Eléctrico"
              : "Híbrido"}
          </p>
          <p className="text-base md:text-lg">
            <span className="font-semibold">Kilometraje:</span> {car.mileage} km
          </p>
          <p className="text-base md:text-lg">
            <span className="font-semibold">Ubicación:</span>{" "}
            {car.location || "Chimaltenango"}
          </p>
          <p className="text-base md:text-lg">
            <span className="font-semibold">Motor:</span> {car.engineCapacity} L
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
