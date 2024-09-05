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
  const lastFiveCars = await prisma.car.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="custom-container mx-auto">
      <Banner />
      <CardsCarousel cars={lastFiveCars} />
      <CardCollection
        carsData={carsData}
        models={models}
        years={years}
        transmissions={transmissions}
      />
    </div>
  );
}
