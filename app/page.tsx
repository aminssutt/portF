import HeroScene from "@/components/HeroScene";
import ScrollPortfolio from "@/components/ScrollPortfolio";

export default function HomePage() {
  return (
    <main className="w-full">
      <div className="sticky top-0 z-0 h-screen">
        <HeroScene />
      </div>
      <div className="relative z-10">
        <ScrollPortfolio />
      </div>
    </main>
  );
}
