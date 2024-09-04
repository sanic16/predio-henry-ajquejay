import Banner from "@/components/Banner";
import CardsCarousel from "@/components/carousels/CardsCarousel";
import CardCollection from "@/components/collections/CardCollection";

export default function Home() {
  return (
    <div className="custom-container mx-auto">
      <Banner />
      <CardsCarousel />
      <CardCollection />
    </div>
  );
}
