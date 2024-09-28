import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Searchbar from "./Searchbar";
import NavIcons from "./NavIcons";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="relative h-20 px-4 md:px-8 lg:px-16 xl:px-32">
      {/* MOBILE */}
      <div className="flex h-full items-center justify-between sm:hidden">
        <Link href="/" className="tracking-wide">
          MedSupply
        </Link>
        <Menu />
      </div>
      {/* DESKTOP */}
      <div className="hidden h-full items-center justify-between gap-8 sm:!flex">
        {/* LEFT */}
        <div className="flex w-1/3 items-center gap-12 xl:w-1/2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              width={128}
              height={128}
              alt="logo"
              className="h-6 w-6"
            />
            <div className="text-xl tracking-wide">MedSupply</div>
          </Link>
          <div className="hidden gap-4 xl:!flex">
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex w-2/3 items-center justify-between gap-8 xl:w-1/2">
          <Searchbar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
