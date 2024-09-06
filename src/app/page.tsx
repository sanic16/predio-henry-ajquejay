import Banner from "@/components/banner/Banner";
import CardsCarousel from "@/components/carousels/CardsCarousel";
import CardCollection from "@/components/collections/CardCollection";
import CardCollectionWithContext from "@/components/collections/CardCollectionWithContext";
import prisma from "@/lib/prisma";

export default async function Home() {
  const carsData = await prisma.car.findMany({});
  const transmissions = Array.from(
    new Set(carsData.map((car) => car.transmission))
  );
  const models = Array.from(
    new Set(carsData.map((car) => car.modelMake))
  ).sort();
  const years = Array.from(new Set(carsData.map((car) => car.modelYear))).sort(
    (a, b) => b - a
  );
  const lastFiveCars = await prisma.car.findMany({
    take: 6,
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="mx-auto">
      <Banner />
      <CardsCarousel cars={lastFiveCars} />
      <CardCollectionWithContext
        carsData={carsData}
        models={models}
        years={years}
        transmissions={transmissions}
      />
    </div>
  );
}
