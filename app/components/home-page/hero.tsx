import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-4 items-center text-neutral-700">
      <h1 className="text-6xl mt-70 text-center relative">
        <span className="text-cyan-500 font-semibold font-sans absolute -translate-x-8 text-lg -top-6 -rotate-5">
          we are,
        </span>
        <span className="text-shadow-slate-300 text-shadow-sm">
          Prime Flow Engineers,
        </span>
      </h1>
      <p className="text-3xl px-10 mb-12 mt-8 text-center">
        Manufacturers, Traders and Wholesalers of Industrial & Chemical Process
        Pumps.
      </p>
      {/* <p>
        Precision-built pumping solutions designed for corrosive chemicals, high
        temperatures, and demanding industrial applications.
      </p> */}
      <div className="flex items-center justify-center gap-8 mb-10">
        <Link
          href="/products"
          className="px-8 py-4 shadow-md hover:shadow-lg text-xl border-2 border-cyan-500 hover:bg-cyan-500 hover:text-white transition-all hover:translate-y-1 hover:scale-[0.99] rounded-md font-semibold"
        >
          View Products
        </Link>
        <Link
          href=""
          className="px-8 py-4 shadow-md hover:shadow-lg text-lg border-2 border-cyan-500 hover:bg-cyan-500 hover:text-white transition-all hover:translate-y-1 hover:scale-[0.99] rounded-md font-semibold"
        >
          Get Quotation
        </Link>
      </div>
    </section>
  );
};

export default Hero;
