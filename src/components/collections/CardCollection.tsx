"use client";
import CardCar from "../cards/CardCar";
import SectionHeading from "../headings/SectionHeading";
import FormFilter from "../filter/FormFilter";
import { Car } from "@prisma/client";
import { useState } from "react";

interface CardCollectionProps {
  carsData: Car[];
  transmissions: string[];
  models: string[];
  years: number[];
}

const CardCollection: React.FC<CardCollectionProps> = ({
  carsData: cars,
  transmissions,
  models,
  years,
}) => {
  // States for pagination
  const [carsData, setCarsData] = useState<Car[]>(cars);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of cars per page

  // Calculate the number of pages
  const totalPages = Math.ceil(carsData.length / itemsPerPage);

  // Slice the data to get the cars for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCars = carsData.slice(startIndex, startIndex + itemsPerPage);

  // Handlers for pagination
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const setSearchedCars = (cars: Car[]) => {
    setCarsData(cars);
    setCurrentPage(1); // Reset to first page when new data is filtered
  };

  return (
    <section className="mt-8 md:mt-12 min-h-screen">
      <SectionHeading title="Todos los autos" align="left" />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,3fr] gap-4 items-start">
        <FormFilter
          setSearchedCars={setSearchedCars}
          models={models}
          transmissions={transmissions}
          years={years}
        />
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentCars.map((car) => (
              <CardCar key={car.id} {...car} />
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Anterior
            </button>
            <span>
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardCollection;
