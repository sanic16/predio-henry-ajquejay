"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import CardCarSlider from "@/components/cards/CardCarSlider";
import { cars_data } from "@/data/cars";

const CardsCarousel = () => {
  return (
    <div className="custom-container mt-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {cars_data.map((car) => (
            <CarouselItem
              key={car.id}
              className="basis-full sm:basis-1/2 lg:basis-1/4"
            >
              <div className="p-1">
                <CardCarSlider key={car.id} {...car} image={car.images[0]} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/70 text-yellow-500 hover:bg-yellow-500/70 hover:text-black" />
        <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/70 text-yellow-500 hover:bg-yellow-500/70 hover:text-black" />
      </Carousel>
    </div>
  );
};

export default CardsCarousel;
