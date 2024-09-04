import { cars_data } from "@/data/cars";
import CardCar from "../cards/CardCar";
import SectionHeading from "../headings/SectionHeading";
import FormFilter from "../filter/FormFilter";

const CardCollection = () => {
  return (
    <section className="mt-8 md:mt-12">
      <SectionHeading title="Todos los autos" align="left" />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,3fr] gap-4 items-start">
        <FormFilter />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cars_data.map((car) => (
            <CardCar key={car.id} {...car} image={car.images[0]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardCollection;
