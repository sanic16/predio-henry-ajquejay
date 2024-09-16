import "./ringLoading.css";

const RingLoading = () => {
  return (
    <div className="w-[200px] h-[200px] relative">
      <div className="absolute top-0 left-0 w-full h-full text-center leading-[200px] text-[22px] uppercase font-bold">
        Cargando
      </div>
      <div className="ring__spinner w-full h-full rounded-full border-l-[4px] border-gray-800"></div>
    </div>
  );
};

export default RingLoading;
