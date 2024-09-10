import prisma from "@/lib/prisma";
import CarListCard from "./CarListCard";

const CarList = async () => {
  const cars = await prisma.car.findMany({
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });
  return (
    <div className="mt-4">
      <div className="flex flex-col gap-4">
        {cars.map((car) => (
          <CarListCard car={car} key={car.id} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
