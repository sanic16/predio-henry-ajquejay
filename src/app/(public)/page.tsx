import Banner from "@/components/banner/Banner";
import CardsCarousel from "@/components/carousels/CardsCarousel";
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
  const minPrice = await prisma.car.aggregate({
    _min: {
      price: true,
    },
  });

  const maxPrice = await prisma.car.aggregate({
    _max: {
      price: true,
    },
  });

  return (
    <div>
      <Banner />
      <CardsCarousel cars={lastFiveCars} />
      <CardCollectionWithContext
        carsData={carsData}
        models={models}
        years={years}
        transmissions={transmissions}
        minPrice={minPrice._min.price || 0}
        maxPrice={maxPrice._max.price || 500000}
      />
    </div>
  );
}
