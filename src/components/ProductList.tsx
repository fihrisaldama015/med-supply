import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-16">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default ProductList;

const Product = () => {
  return (
    <Link
      href={"/test"}
      className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
    >
      <div className="relative h-80 w-full">
        <img
          src="https://picsum.photos/800/1200"
          alt="photo"
          className="absolute z-10 h-80 w-full rounded-md object-cover duration-500 ease-in-out hover:brightness-75"
        />
      </div>
      <div className="flex justify-between">
        <h1 className="font-medium">Product Name</h1>
        <p className="font-bold">Rp. 100.000</p>
      </div>
      <p className="text-sm text-neutral-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in
      </p>
      <button className="w-max rounded-2xl px-4 py-2 text-xs ring-1 ring-rose-500 transition-all duration-300 ease-in-out hover:bg-rose-500 hover:text-white">
        Tambah ke Keranjang
      </button>
    </Link>
  );
};
