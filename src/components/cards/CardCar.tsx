import Link from "next/link";
import Image from "next/image";
import { Car } from "@prisma/client";
export interface CardCarSliderProps extends Car {}

const CardCar: React.FC<CardCarSliderProps> = ({
  id,
  title,
  images,
  modelMake,
  modelYear,
  price,
  mileage,
  transmission,
  engineType,
  engineCapacity,
}) => {
  return (
    <Link href={`/autos/${modelMake}-${modelYear}-${id}`} className="block ">
      <div className="bg-white shadow-md p-4 rounded-md">
        <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${images[0]}`}
            alt={title}
            className="block w-full h-full object-cover"
            fill
          />
        </div>
        <div className="mt-4">
          <h1 className="line-clamp-1 font-semibold tracking-wider mb-2">
            {modelYear} {title}
          </h1>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-gray-500">
            <p className="text-sm">
              {new Intl.NumberFormat().format(mileage)} km
            </p>
            <p className="text-sm">
              {transmission === "AUTO"
                ? "Automático"
                : transmission === "MANUAL"
                ? transmission
                : "CVT"}{" "}
              {engineType === "PETROL"
                ? "Gasolina"
                : engineType === "DIESEL"
                ? "Diésel"
                : engineType === "ELECTRIC"
                ? "Eléctrico"
                : "Híbrido"}{" "}
              {engineCapacity}L
            </p>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <button>Ver más</button>
          <p className="text-2xl font-bold">
            Q {new Intl.NumberFormat().format(price)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardCar;
