"use client";
import { createContext, useContext, useState } from "react";
import { CarsContextType } from "../../types";
import { Car } from "@prisma/client";

export const CarsContext = createContext<CarsContextType>({
  cars: [],
  loadMoreCars: () => {},
  setSearchedCars: () => {},
  hasMoreCars: false,
});

export const CarsContextProvider = ({
  children,
  initialCars,
}: {
  children: React.ReactNode;
  initialCars: Car[];
}) => {
  const itemsPerPage = 8;
  const [filteredCars, setFilteredCars] = useState<Car[]>(initialCars);
  const [cars, setCars] = useState<Car[]>(filteredCars.slice(0, itemsPerPage));

  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const addCars = (newCars: Car[]) => {
    setCars(newCars);
    setFilteredCars(newCars.slice(0, 8));
  };

  const loadMoreCars = () => {
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * itemsPerPage;
    const moreCars = filteredCars.slice(startIndex, startIndex + itemsPerPage);

    setCars((prevCars) => [...prevCars, ...moreCars]);
    setCurrentPage(nextPage);
  };

  const setSearchedCars = (cars: Car[]) => {
    setFilteredCars(cars);
    setCars(cars.slice(0, itemsPerPage));
    setCurrentPage(1);
  };

  const hasMoreCars = currentPage * itemsPerPage < filteredCars.length;

  return (
    <CarsContext.Provider
      value={{
        cars,
        loadMoreCars,
        hasMoreCars,
        setSearchedCars,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};

const useContextCars = () => useContext(CarsContext);
export default useContextCars;
