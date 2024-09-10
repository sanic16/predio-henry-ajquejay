import prisma from "@/lib/prisma";
import ImageCard from "./ImageCard";

interface ListImagesProps {
  id: string;
}
const ListImages: React.FC<ListImagesProps> = async ({ id }) => {
  const car = await prisma.car.findUnique({
    where: {
      id,
    },
    select: {
      images: true,
    },
  });

  if (!car) return <div>No hay imagenes</div>;

  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
      {car.images.map((image) => (
        <ImageCard image={image} key={image} id={id} />
      ))}
    </div>
  );
};

export default ListImages;
