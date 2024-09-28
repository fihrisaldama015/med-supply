import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import React from "react";

const page = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Campaign */}
      <div className="hidden h-64  justify-between bg-pink-50 p-4 md:!flex">
        <div className="flex w-full flex-col items-center justify-center gap-8 xl:w-2/3">
          <h1 className="text-4xl font-semibold leading-[48px] text-neutral-700">
            Promo Spesial Bulan Ini <br /> Diskon Hingga 50%
          </h1>
          <button className="w-max rounded-3xl bg-rose-500 px-5 py-3 text-sm text-white">
            Beli Sekarang
          </button>
        </div>
        <div className="hidden rounded-lg xl:!flex">
          <img
            src="https://picsum.photos/800/400"
            alt="photo"
            className="h-full rounded-lg object-cover"
          />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCT */}
      <h1 className="mt-12 text-xl font-semibold">Produk untuk Kamu</h1>
      <ProductList />
    </div>
  );
};

export default page;
