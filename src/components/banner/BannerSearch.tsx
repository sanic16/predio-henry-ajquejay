"use client";

import React, { useEffect, useState, useTransition } from "react";
import { searchByTitle } from "@/actions/search";
import { toast } from "@/hooks/use-toast";
import useContextCars from "@/context/cars-context";
import { useRouter } from "next/navigation";

const BannerSearch = () => {
  const [carTitle, setCarTitle] = useState("");
  const [isPending, startTransition] = useTransition();
  const { setSearchedCars, handleLoadingCars } = useContextCars();
  const router = useRouter();

  useEffect(() => {
    if (isPending) {
      router.push("/#cars");
    }
  }, [isPending, router]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    handleLoadingCars(true);
    startTransition(() => {
      searchByTitle(carTitle)
        .then((data) => {
          //   console.log(data);
          setSearchedCars(data);
        })
        .catch((error) => {
          toast({
            variant: "destructive",
            title: "Error",
            description: "No se encontraron resultados",
            duration: 5000,
          });
        })
        .finally(() => {
          handleLoadingCars(false);
        });
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Regex to match a single word (letters and numbers) without whitespace
    const regex = /^[a-zA-Z0-9]{0,15}$/;

    // Update the state only if the input matches the regex and is 20 characters or less
    if (regex.test(value)) {
      setCarTitle(value);
    }
  };

  return (
    <div className="w-full">
      <div className=" flex justify-center items-center gap-4">
        <input
          placeholder="chevrolet"
          value={carTitle}
          onChange={handleChange}
          type="text"
          maxLength={20} // Enforce max length at the input level
          disabled={isPending}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch(e);
          }}
          className="px-4 py-2  w-full max-w-full sm:max-w-md md:max-w-xl xl:max-w-2xl bg-transparent border-2 text-white border-gray-300 placeholder-gray-400 outline-none"
        />
      </div>
      <p className="text-white text-sm xl:text-base text-center mt-2    ">
        Ingresa la marca, modelo o año de tu interés
      </p>
    </div>
  );
};

export default BannerSearch;
