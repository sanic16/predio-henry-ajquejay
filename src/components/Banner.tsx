import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import carImage1 from "@/../public/cars/car_A_1.jpg";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="h-[70vh] mt-4">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full h-full relative"
      >
        <CarouselContent>
          <CarouselItem className="w-full">
            <Card className="w-full">
              <CardContent className="w-full h-[70vh] p-0">
                <Image
                  src={carImage1}
                  alt="Car"
                  className="h-full w-full object-cover"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-yellow-500" />
        <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-yellow-500" />
      </Carousel>
    </div>
  );
};

export default Banner;
