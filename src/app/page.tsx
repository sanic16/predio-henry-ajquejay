import Banner from "@/components/Banner";
import CardsCarousel from "@/components/carousels/CardsCarousel";
import CardCollection from "@/components/collections/CardCollection";
import prisma from "@/lib/prisma";

export default async function Home() {
  const carsData = await prisma.car.findMany({});
  const transmissions = Array.from(
    new Set(carsData.map((car) => car.transmission))
  );
  const models = Array.from(new Set(carsData.map((car) => car.modelMake)));
  const years = Array.from(new Set(carsData.map((car) => car.modelYear)));
  return (
    <div className="custom-container mx-auto">
      <Banner />
      <CardsCarousel />
      <CardCollection
        carsData={carsData}
        models={models}
        years={years}
        transmissions={transmissions}
      />
    </div>
  );
}
