"use client";

import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { deleteImageAction } from "@/actions/images";
import { useState, useTransition } from "react";
import { toast } from "@/hooks/use-toast";

interface ImageCardProps {
  id: string;
  image: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ id, image }) => {
  const [pending, startTransition] = useTransition();
  const onImageDelete = async (id: string, image: string) => {
    startTransition(async () => {
      const res = await deleteImageAction(id, image);
      if (res.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: res.error,
          duration: 6000,
        });
      } else if (res.success) {
        toast({
          title: "Imagen eliminada",
          description: res.success,
          duration: 6000,
        });
      }
    });
  };

  return (
    <div className="w-32 h-32: md:w-40 md:h-40">
      <div
        className={`relative w-32 h-32 md:w-40 md:h-40 ${
          pending ? "opacity-50" : ""
        }`}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${image}`}
          alt=""
          fill
          className="object-cover w-full h-full"
        />
        <button
          className={`absolute top-0 right-0 bg-red-500 rounded-full p-1 ${
            pending ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => onImageDelete(id, image)}
          disabled={pending}
        >
          <FaTimes className="text-white text-xl" />
        </button>
      </div>
      {pending && <p className="text-black text-xs text-left">Eliminando...</p>}
    </div>
  );
};

export default ImageCard;
