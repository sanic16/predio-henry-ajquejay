import { Car } from "@prisma/client";

type CarsContextType = {
  cars: Car[];
  filteredCars: Car[];
  currentPage: number;
  addCars: (newCars: Car[]) => void;
  loadMoreCars: () => void;
  setSearchedCars: (cars: Car[]) => void;
  hasMoreCars: boolean;
};
