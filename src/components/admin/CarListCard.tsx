import { Car } from "@prisma/client";
import { Button } from "../ui/button";
import ActionButton from "./ActionButton";
import { deleteCarAction, publishCarAction } from "@/actions";
import Link from "next/link";

interface CarListCardProps {
  car: Car;
}
const CarListCard: React.FC<CarListCardProps> = ({ car }) => {
  return (
    <div
      key={car.id}
      className="flex flex-col items-center gap-8 text-center md:text-left md:flex-row md:justify-between bg-gray-200 p-4 rounded-md"
    >
      <div>
        <h2 className="text-2xl">{car.title}</h2>
        <p>
          {car.modelMake} - {car.modelYear}
        </p>
        <div className="mt-2 flex justify-center md:justify-start items-center gap-4">
          <p
            className={`text-xs px-2 py-1 rounded-sm ${
              car.published
                ? "bg-yellow-300 text-black"
                : "bg-gray-950 text-white"
            }`}
          >
            {car.published ? "Publicado" : "No publicado"}
          </p>

          <p className="text-xs bg-gray-100 text-black px-2 py-1 rounded-sm">
            {car.images.length} Imagenes
          </p>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        <Link
          href={`/actualizar/imagen/${car.id}`}
          className="h-9 px-4 py-2 bg-gray-300 rounded-md"
        >
          Agregar Imagen
        </Link>
        <Link
          href={`/actualizar/auto/${car.id}`}
          className="h-9 px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          Editar
        </Link>

        <ActionButton
          id={car.id}
          buttonText="Eliminar"
          buttonVariant="destructive"
          deleteCarAction={deleteCarAction}
          action="delete"
        />
        <ActionButton
          id={car.id}
          buttonText={car.published ? "Despublicar" : "Publicar"}
          action="publish"
          publishCarAction={publishCarAction}
          buttonVariant={`${car.published ? "warning" : "green"}`}
          publishState={car.published}
        />
      </div>
    </div>
  );
};

export default CarListCard;
