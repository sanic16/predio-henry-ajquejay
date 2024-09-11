import BackButton from "@/components/buttons/BackButton";
import CarDetails from "@/components/car-details/CarDetails";
import CarSlideshowThumbnails from "@/components/slideshows/CarSlideshowThumbnails";
import CarDetailsContact from "@/forms/CarDetailsContact";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageCarDetailsProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: PageCarDetailsProps): Promise<Metadata> {
  const car = await prisma.car.findUnique({
    where: {
      id: params.id.split("-")[2],
    },
  });

  if (!car) {
    return {};
  }

  return {
    title: `${car.title} - ${car.modelYear}`,
    description: car.description,
    keywords: [car.modelMake, car.modelYear.toString(), car.title],
    openGraph: {
      title: `${car.title} - ${car.modelYear}`,
      description: car.description || "",
      type: "website",
      images: [
        {
          url: `${process.env.BASE_IMAGE_URL}${car.images[0]}`,
        },
      ],
    },
  };
}

export default async function PageCarDetails({ params }: PageCarDetailsProps) {
  const extractedId = params.id.split("-")[2];

  const car = await prisma.car.findUnique({
    where: {
      id: extractedId,
    },
  });

  if (!car) {
    return notFound();
  }

  return (
    <div className="container mx-auto max-w-[1280px] px-2 xl:px-0">
      <BackButton />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-x-8 gap-y-4 items-start">
        <div className="col-span-1 md:col-span-2">
          <CarSlideshowThumbnails images={car.images} />
        </div>
        <div className="col-span-1 shadow-md">
          <CarDetailsContact
            title="Contactar al vendedor"
            messagePlaceholder={`Hola, estoy interesado en el ${car.title} ${car.modelYear}`}
            carId={car.id}
          />
        </div>
        <div className="col-span-1 row-start-2 row-end-3 md:row-start-auto md:row-end-auto md:col-span-3 shadow-md">
          <CarDetails car={car} />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const cars = await prisma.car.findMany({
    select: {
      id: true,
      modelMake: true,
      modelYear: true,
    },
    where: {
      published: true,
    },
  });
  return cars.map((car) => ({
    id: `${car.modelMake}-${car.modelYear}-${car.id}`,
  }));
}
