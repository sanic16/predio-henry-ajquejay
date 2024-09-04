import { cars_data } from "@/data/cars";
import CardCar from "../cards/CardCar";
import SectionHeading from "../headings/SectionHeading";

const CardCollection = () => {
  return (
    <section className="mt-12">
      <SectionHeading title="Todos los autos" align="left" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {cars_data.map((car) => (
          <CardCar key={car.id} {...car} image={car.images[0]} />
        ))}
      </div>
    </section>
  );
};

export default CardCollection;
