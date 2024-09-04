import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import Image from "next/image";
export interface CardCarSliderProps {
  id: number;
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  model: {
    year: number;
    make: string;
  };
  price: number;
  mileage?: number;
  transmission?: string;
}
const CardCar: React.FC<CardCarSliderProps> = ({
  id,
  title,
  image,
  model,
  price,
  mileage,
  transmission,
}) => {
  return (
    <Link
      href={`/autos/${model.make}-${model.year}-${id}`}
      className="block color-gray-900 text-base font-bold cursor-pointer w-full min-w-[280px] sm:min-w-[320px]"
    >
      <Card className="flex">
        <CardHeader className="w-full flex flex-col justify-between p-2">
          <CardTitle className="line-clamp-2 text-lg sm:line-clamp-none md:line-clamp-2 lg:line-clamp-none xl:line-clamp-2">
            {title} - {model.year}
          </CardTitle>
          <CardDescription className="flex flex-col justify-between gap-2 sm:gap-4 md:gap-8 sm:h-full md:h-auto lg:h-full xl:h-auto">
            <span className="text-xs">
              {mileage} km - {transmission}
            </span>
            <span className="text-2xl sm:text-3xl">Q {price}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="w-32 min-w-32 max-w-32 aspect-auto sm:w-40 sm:min-w-40 sm:max-w-40 sm:aspect-square flex p-2 -order-1">
          <Image
            src={image}
            alt={title}
            className="block w-full h-full object-cover"
          />
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardCar;
