import cardImageA1 from "@/../public/cars/car_A_1.jpg";
import cardImageA2 from "@/../public/cars/car_A_2.jpg";
import cardImageA3 from "@/../public/cars/car_A_3.jpg";
import cardImageA4 from "@/../public/cars/car_A_4.jpg";
import cardImageA5 from "@/../public/cars/car_A_5.jpg";

import cardImageB1 from "@/../public/cars/car_B_1.jpg";
import cardImageB2 from "@/../public/cars/car_B_2.jpg";
import cardImageB3 from "@/../public/cars/car_B_3.jpg";
import cardImageB4 from "@/../public/cars/car_B_4.jpg";
import cardImageB5 from "@/../public/cars/car_B_5.jpg";

import cardImageC1 from "@/../public/cars/car_C_1.jpg";
import cardImageC2 from "@/../public/cars/car_C_2.jpg";
import cardImageC3 from "@/../public/cars/car_C_3.jpg";
import cardImageC4 from "@/../public/cars/car_C_4.jpg";
import cardImageC5 from "@/../public/cars/car_C_5.jpg";

import cardImageD1 from "@/../public/cars/car_D_1.jpg";
import cardImageD2 from "@/../public/cars/car_D_2.jpg";
import cardImageD3 from "@/../public/cars/car_D_3.jpg";
import cardImageD4 from "@/../public/cars/car_D_4.jpg";
import cardImageD5 from "@/../public/cars/car_D_5.jpg";

import cardImageE1 from "@/../public/cars/car_E_1.jpg";
import cardImageE2 from "@/../public/cars/car_E_2.jpg";
import cardImageE3 from "@/../public/cars/car_E_3.jpg";
import cardImageE4 from "@/../public/cars/car_E_4.jpg";
import cardImageE5 from "@/../public/cars/car_E_5.jpg";

import cardImageF1 from "@/../public/cars/car_F_1.jpg";
import cardImageF2 from "@/../public/cars/car_F_2.jpg";
import cardImageF3 from "@/../public/cars/car_F_3.jpg";
import cardImageF4 from "@/../public/cars/car_F_4.jpg";
import cardImageF5 from "@/../public/cars/car_F_5.jpg";

type Engine = {
  fuelType: "Gasolina" | "Diésel" | "Híbrido" | "Eléctrico";
  capacity: string;
};

export interface CardCarsSliderProps {
  id: number;
  title: string;
  images: {
    src: string;
    width: number;
    height: number;
  }[];
  model: {
    year: number;
    make: string;
  };
  price: number;
  condition?: "Nuevo" | "Usado";
  transmission?: "Automático" | "Manual";
  engine: Engine;
  mileage?: number;
  location?: string;
  description?: string;
}

export const cars_data: CardCarsSliderProps[] = [
  {
    id: 1,
    images: [cardImageA1, cardImageA2, cardImageA3, cardImageA4, cardImageA5],
    title: "Nissan Versa Advance",
    model: {
      year: 2020,
      make: "Nissan",
    },
    price: 55000,
    condition: "Usado",
    transmission: "Automático",
    mileage: 10000,
    location: "Chimaltenango",
    engine: {
      fuelType: "Gasolina",
      capacity: "1.6L",
    },
  },
  {
    id: 2,
    images: [cardImageB1, cardImageB2, cardImageB3, cardImageB4, cardImageB5],
    title: "Ford F150 XLT Cabina Sencilla",
    model: {
      year: 2019,
      make: "Ford",
    },
    price: 250000,
    engine: {
      fuelType: "Gasolina",
      capacity: "3.5L",
    },
    condition: "Usado",
    transmission: "Automático",
    mileage: 50000,
    location: "Chimaltenango",
  },
  {
    id: 3,
    images: [cardImageC1, cardImageC2, cardImageC3, cardImageC4, cardImageC5],
    title: "Volkswagen Nivus Highline",
    model: {
      year: 2021,
      make: "Volkswagen",
    },
    price: 300000,
    engine: {
      fuelType: "Gasolina",
      capacity: "1.0L",
    },
    condition: "Usado",
    transmission: "Automático",
    mileage: 20000,
    location: "Chimaltenango",
  },
  {
    id: 4,
    images: [cardImageD1, cardImageD2, cardImageD3, cardImageD4, cardImageD5],
    title: "Renault Kwid Intense",
    model: {
      year: 2023,
      make: "Renault",
    },
    price: 200000,
    engine: {
      fuelType: "Gasolina",
      capacity: "1.0L",
    },
    condition: "Nuevo",
    transmission: "Automático",
    location: "Chimaltenango",
  },
  {
    id: 5,
    images: [cardImageE1, cardImageE2, cardImageE3, cardImageE4, cardImageE5],
    title: "Renault Stepway Intense",
    model: {
      year: 2020,
      make: "Renault",
    },
    price: 150000,
    engine: {
      fuelType: "Gasolina",
      capacity: "1.6L",
    },
    condition: "Usado",
    transmission: "Automático",
    mileage: 30000,
    location: "Chimaltenango",
  },
  {
    id: 6,
    images: [cardImageF1, cardImageF2, cardImageF3, cardImageF4, cardImageF5],
    title: "Kia Picanto X-Line 1.25 MT",
    model: {
      year: 2023,
      make: "Kia",
    },
    price: 100000,
    engine: {
      fuelType: "Gasolina",
      capacity: "1.25L",
    },
    condition: "Nuevo",
    transmission: "Manual",
    location: "Chimaltenango",
  },
];
