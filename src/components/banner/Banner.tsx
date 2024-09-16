import Image from "next/image";
import BannerSearch from "./BannerSearch";

const Banner = () => {
  return (
    <div className="h-[calc(100vh-5rem)] bg-gray-500 relative">
      <div className="absolute flex flex-col items-center gap-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-[92%] lg:max-w-4xl xl:max-w-5xl bg-gray-950/50 px-4 py-8 rounded-lg">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white capitalize text-center">
          En la búsqueda de tu próximo auto ?
        </h1>
        <p className="lg:text-xl text-white text-center">
          Busca y encuentra el auto que más se ajuste a tus necesidades.
        </p>

        <BannerSearch />
      </div>
      <div className="h-full relative">
        <Image
          src={`${process.env.BASE_IMAGE_URL}henry-ajquejay/header/coqk0hswb6j93joxplyk`}
          alt="Banner"
          fill
          sizes="100vw"
          className="object-cover object-[50%,75%]"
        />
      </div>
    </div>
  );
};

export default Banner;
