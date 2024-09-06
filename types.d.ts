import { Car } from "@prisma/client";

type CarsContextType = {
  cars: Car[];
  loadMoreCars: () => void;
  setSearchedCars: (cars: Car[]) => void;
  hasMoreCars: boolean;
};
