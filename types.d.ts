import { Car } from "@prisma/client";

type CarsContextType = {
  cars: Car[];
  loadMoreCars: () => void;
  setSearchedCars: (cars: Car[]) => void;
  hasMoreCars: boolean;
  loadingCars: boolean;
  handleLoadingCars: (loading: boolean) => void;
};
