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
  minPrice: number;
  maxPrice: number;
}

const CardCollectionWithContext: React.FC<CardCollectionProps> = ({
  carsData: initialCars,
  transmissions,
  models,
  years,
  minPrice,
  maxPrice,
}) => {
  const { cars, loadMoreCars, hasMoreCars } = useContextCars();

  const [showFilterForm, setShowFilterForm] = useState(false); // State to toggle filter form visibility

  // Determine if there are more cars to load

  return (
    <section id="cars" className="px-2 xl:px-0 mt-8 md:mt-12 min-h-screen">
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
        {/* Show the form based on state in small screens, always show in md and larger */}
        <div
          className={`col-span-1 ${
            showFilterForm ? "block" : "hidden"
          } md:block`}
        >
          <FormFilter
            models={models}
            transmissions={transmissions}
            years={years}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        </div>

        <div className="col-span-3">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-2">
            {cars.map((car) => (
              <CardCar key={car.id} {...car} />
            ))}
          </div>
          {hasMoreCars && (
            <div className="flex justify-center mt-4">
              <button
                onClick={loadMoreCars}
                className="px-4 py-2 bg-gray-800 text-white rounded"
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
