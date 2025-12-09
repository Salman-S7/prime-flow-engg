import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="shadow-md bg-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2">
        <Link href="/" className="flex gap-4 items-center">
          <Image
            src="./prime-flow-logo.svg"
            height={50}
            width={70}
            alt="Prime Flow Logo"
          />
          {/* <span className="text-2xl font-semibold">Prime Flow Engineers.</span> */}
        </Link>

        <nav className="flex gap-8 text-lg *:hover:text-slate-700">
          <Link href="/about-us">About Us</Link>
          <Link href="/about-us">All Products</Link>
          <Link href="/about-us">Get Quotation</Link>
          <Link href="/about-us">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
