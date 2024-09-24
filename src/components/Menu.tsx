"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IoReorderThreeOutline
        className="h-6 w-6 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute left-0 top-20 z-10 flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center gap-8 bg-black text-xl text-white shadow-lg">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
