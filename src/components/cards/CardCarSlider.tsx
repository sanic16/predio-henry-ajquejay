import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export interface CardCarSliderProps {
  id: number;
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  model: {
    year: number;
    make: string;
  };
  price: number;
}
const CardCarSlider: React.FC<CardCarSliderProps> = ({
  title,
  image,
  model,
  price,
  id,
}) => {
  return (
    <Card className="h-full transition-transform transform hover:scale-105 bg-gradient-to-b from-gray-900 via-gray-800 to-black shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 text-white">
        <CardTitle className="text-xl font-bold line-clamp-1">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-400">
          {model.year} {model.make}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-40 w-full">
          <Image
            src={image.src}
            alt={title}
            width={image.width}
            height={image.height}
            className="w-full h-full object-cover transition-opacity hover:opacity-90"
          />
        </div>
      </CardContent>
      <CardFooter className="bg-gray-900 p-4 text-white flex items-center justify-between">
        <p className="text-lg font-semibold">Q{price}</p>
        <Link
          href={`/autos/${model.make}-${model.year}-${id}`}
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-1 px-3 rounded-lg transition-all"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardCarSlider;
