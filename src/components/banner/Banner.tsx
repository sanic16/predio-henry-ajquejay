"use client";

import carImg1 from "@/../public/cars/car_A_1.jpg";
import carImg2 from "@/../public/cars/car_B_1.jpg";
import carImg3 from "@/../public/cars/car_C_1.jpg";
import carImg4 from "@/../public/cars/car_D_1.jpg";
import carImg5 from "@/../public/cars/car_E_1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import "./custom.css";

const Banner = () => {
  let bannerText = `Descubre la selección más exclusiva de vehículos y encuentra el auto
          de tus sueños. ¡Explora nuestras ofertas y da el siguiente paso hacia
          tu próxima aventura sobre ruedas!`;
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    bannerText = `Descubre la selección más exclusiva de vehículos y encuentra el auto
          de tus sueños.`;
  }
  return (
    <div className="relative mt-4">
      <Swiper
        navigation
        modules={[Navigation, EffectFade, Autoplay]}
        className="w-full rounded-lg"
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop
      >
        {[carImg1, carImg2, carImg3, carImg4, carImg5].map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex h-[50vh] sm:h-[75vh] w-full items-center justify-center">
              <Image
                src={img}
                alt="Car"
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 left-0 right-0 z-[1] bg-black/70 text-white p-2 sm:p-3 md:p-4">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center text-gray-200">
          Bienvenido a Tu Destino Automotriz
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-center text-gray-100 mt-1 md:mt-2">
          {bannerText}
        </p>
      </div>
    </div>
  );
};

export default Banner;
