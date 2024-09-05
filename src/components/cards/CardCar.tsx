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
}) => {
  return (
    <Link
      href={`/autos/${modelMake}-${modelYear}-${id}`}
      className="block color-gray-900  font-bold cursor-pointer w-full min-w-[280px] sm:min-w-[320px]"
    >
      <Card className="flex">
        <CardHeader className="w-full flex flex-col justify-between p-2">
          <CardTitle className="line-clamp-2 text-lg sm:line-clamp-none md:line-clamp-2 lg:line-clamp-none xl:line-clamp-2">
            {title} - {modelYear}
          </CardTitle>
          <CardDescription className="flex flex-col justify-between gap-2 sm:gap-4 md:gap-8 sm:h-full md:h-auto lg:h-full xl:h-auto">
            <span className="text-xs">
              {mileage} km - {transmission}
            </span>
            <span className="text-2xl sm:text-3xl">Q {price}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="relative w-32 min-w-32 max-w-32 aspect-auto sm:w-40 sm:min-w-40 sm:max-w-40 sm:aspect-square flex p-2 -order-1">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${images[0]}`}
            alt={title}
            className="block w-full h-full object-cover"
            fill
          />
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardCar;
