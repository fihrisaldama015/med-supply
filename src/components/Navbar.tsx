import Link from "next/link";
import React from "react";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="relative h-20 px-4 md:px-8 lg:px-16 xl:px-32">
      {/* MOBILE */}
      <div className="hidden h-full items-center justify-between md:flex">
        <Link href="/" className="tracking-wide">
          MedSupply
        </Link>
        <Menu />
      </div>
      {/* DESKTOP */}
      <div className="hidden h-full items-center justify-between gap-8 bg-teal-300 sm:!flex">
        {/* LEFT */}
        <div className="w-1/3">
          <Link href="/" className="tracking-wide">
            MedSupply
          </Link>
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
        </div>
        {/* RIGHT */}
        <div className="w-2/3">test</div>
      </div>
    </div>
  );
};

export default Navbar;
