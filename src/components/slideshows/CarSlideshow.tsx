"use client";

import carImg1 from "@/../public/cars/car_A_1.jpg";
import carImg2 from "@/../public/cars/car_B_1.jpg";
import carImg3 from "@/../public/cars/car_C_1.jpg";
import carImg4 from "@/../public/cars/car_D_1.jpg";
import carImg5 from "@/../public/cars/car_E_1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";

const CarSlideshow = () => {
  return (
    <section className="py-12">
      <div className="container">
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination, EffectFade]}
          className="h-96 w-full rounded-lg"
          effect="fade"
          loop
        >
          {[carImg1, carImg2, carImg3, carImg4, carImg5].map((img, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={img}
                  alt="Car"
                  className="block h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CarSlideshow;
