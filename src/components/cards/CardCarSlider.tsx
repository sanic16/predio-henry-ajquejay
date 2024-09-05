import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Car } from "@prisma/client";

export interface CardCarSliderProps {
  car: Car;
}
const CardCarSlider: React.FC<CardCarSliderProps> = ({ car }) => {
  return (
    <Card className="h-full transition-transform duration-300 transform bg-gradient-to-b from-gray-900 via-gray-800 to-black shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 text-white">
        <CardTitle className="text-xl font-bold line-clamp-1">
          {car.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-400">
          {car.modelYear} {car.modelMake}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative h-40 w-full">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${car.images[0]}`}
            alt={car.title}
            className="w-full h-full object-cover transition-opacity hover:opacity-90"
            fill
          />
        </div>
      </CardContent>
      <CardFooter className="bg-gray-900 p-4 text-white flex items-center justify-between">
        <p className="text-lg font-semibold">Q {car.price}</p>
        <Link
          href={`/autos/${car.modelMake}-${car.modelYear}-${car.id}`}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-3 rounded-lg transition-all"
        >
          Ver más
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardCarSlider;
