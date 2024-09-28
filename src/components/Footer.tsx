import React from "react";

const Footer = () => {
  return (
    <div className="mt-24 bg-neutral-200 px-4 py-12 text-sm md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-8">
          <div className="font-semibold">© 2024 - MedSupply</div>
          <div className="text-center text-base">
            Muhamad Fihris Aldama - Sertifikasi BNSP
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div>
            <span className="mr-4 text-neutral-500">Language</span>
            <span className="font-medium">English | Indonesia</span>
          </div>
          <div>
            <span className="mr-4 text-neutral-500">Currency</span>
            <span className="font-medium">USD | IDR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
