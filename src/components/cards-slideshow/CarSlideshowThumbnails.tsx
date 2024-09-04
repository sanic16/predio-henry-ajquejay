"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectFade } from "swiper/modules";
import { Swiper as SwiperOr } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

interface CarSlideshowThumbnailsProps {
  images: {
    src: string;
    width: number;
    height: number;
  }[];
}
const CarSlideshowThumbnails: React.FC<CarSlideshowThumbnailsProps> = ({
  images,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperOr | null>(null);

  return (
    <div className="container mx-auto">
      <Swiper
        loop
        navigation
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, EffectFade]}
        effect="fade"
        className="h-96 w-full rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={image}
                alt="Car"
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={12}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs mt-3 h-32 w-full rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <button className="flex h-full w-full items-center justify-center">
              <Image
                src={image}
                alt="Car"
                width={200}
                height={150}
                className="block h-full w-full object-cover"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarSlideshowThumbnails;
