"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="py-1 px-4 bg-blue-500 rounded-md text-white mt-4"
      onClick={() => router.back()}
    >
      Regresar
    </button>
  );
};

export default BackButton;
