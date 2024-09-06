"use client";
import CardCar from "../cards/CardCar";
import SectionHeading from "../headings/SectionHeading";
import FormFilter from "../filter/FormFilter";
import { Car } from "@prisma/client";
import { useState } from "react";
import useContextCars from "@/context/cars-context";

interface CardCollectionProps {
  carsData: Car[];
  transmissions: string[];
  models: string[];
  years: number[];
}

const CardCollectionWithContext: React.FC<CardCollectionProps> = ({
  carsData: initialCars,
  transmissions,
  models,
  years,
}) => {
  const itemsPerPage = 8; // Number of cars per page

  const {
    cars,
    filteredCars,
    addCars,
    currentPage,
    loadMoreCars,
    hasMoreCars,
  } = useContextCars();

  const [showFilterForm, setShowFilterForm] = useState(false); // State to toggle filter form visibility

  // Determine if there are more cars to load

  return (
    <section className="mt-8 md:mt-12 min-h-screen">
      <SectionHeading title="Todos los autos" align="left" />

      {/* Button to show/hide filter form on small screens */}
      <div className="mb-4 md:hidden flex justify-end">
        <button
          onClick={() => setShowFilterForm((prev) => !prev)}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          {showFilterForm ? "Ocultar filtros" : "Mostrar filtros"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr,3fr] gap-4 items-start">
        {/* Show the form based on state in small screens, always show in md and larger */}
        <div className={`${showFilterForm ? "block" : "hidden"} md:block`}>
          <FormFilter
            models={models}
            transmissions={transmissions}
            years={years}
          />
        </div>

        <div>
          <div className="flex flex-col gap-4">
            {cars.map((car) => (
              <CardCar key={car.id} {...car} />
            ))}
          </div>
          {hasMoreCars && (
            <div className="flex justify-center mt-4">
              <button
                onClick={loadMoreCars}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cargar más autos
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CardCollectionWithContext;
