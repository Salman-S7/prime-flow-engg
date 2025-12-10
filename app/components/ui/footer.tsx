import Image from "next/image";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandGmail,
  IconBrandGoogleMaps,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconLocation,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto flex justify-between py-8">
        <div className="flex flex-col gap-8">
          <Link href="/" className="flex font-sans items-center gap-4">
            <Image
              src="./prime-flow-logo.svg"
              height={60}
              width={60}
              alt="Prime flow engineers logo"
            />
            <span className="text-2xl font-semibold font-mono flex flex-col">
              {" "}
              Prime Flow Engineers.
              <span className="text-xs font-sans">
                Industrial & Chemical Process Pump Manufacturer
              </span>
            </span>
          </Link>
          <div className="flex gap-6 *:hover:text-cyan-400 *:transition-colors">
            <Link href="">
              <IconBrandInstagram height={36} width={36} />
            </Link>
            <Link href="">
              <IconBrandFacebook height={36} width={36} />
            </Link>
            <Link href="">
              <IconMail height={36} width={36} />
            </Link>
            <Link href="">
              <IconBrandWhatsapp height={36} width={36} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="font-bold text-lg">Quick Links</h3>
          <Link href="">About</Link>
          <Link href="">Products</Link>
          <Link href="">Industries</Link>
          <Link href="">Services</Link>
          <Link href="">Contact</Link>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="font-bold text-lg">Product Categories</h3>
          <Link href="">Centrifugal Pumps</Link>
          <Link href="">PP Pumps</Link>
          <Link href="">PVDF Pumps</Link>
          <Link href="">Mud Pumps</Link>
          <Link href="">FRP Pumps</Link>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="font-bold text-lg">Contact Details</h3>
          <Link href="" className="flex items-center gap-2">
            <IconPhone height={36} width={36} />
            +91 98765 43210
          </Link>
          <Link href="" className="flex items-center gap-2">
            <IconMail height={36} width={36} />
            primeflowengineers@gmail.com
          </Link>
          <Link href="" className="flex items-center gap-2">
            <IconMapPin height={36} width={36} />
            At post Baner, Office no. 123, Shivajinagar, Pune.
          </Link>
        </div>
      </div>
      <div className="text-center py-4 text-lg border-y border-y-slate-200">
        © All rights reserved.
      </div>
    </footer>
  );
}
