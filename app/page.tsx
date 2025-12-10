import CoreProducts from "./components/home-page/core-products";
import Hero from "./components/home-page/hero";
import InfiniteCarousel from "./components/home-page/infinite-scroll";
import QuickEnquiryForm from "./components/home-page/quick-enquiry-form";
import WhyIndustriesTrust from "./components/home-page/why-industries-trust-us";

export default function Home() {
  return (
    <main className="font-mono">
      <Hero />
      <InfiniteCarousel />
      <CoreProducts />
      <WhyIndustriesTrust />
      <QuickEnquiryForm />
    </main>
  );
}
