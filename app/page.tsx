import Hero from "./components/home-page/hero";
import InfiniteCarousel from "./components/home-page/infinite-scroll";

export default function Home() {
  return (
    <main className="font-mono">
      <Hero />
      <InfiniteCarousel />
    </main>
  );
}
