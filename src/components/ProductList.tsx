import { formatToRupiah } from "@/utils/helper/formatCurrency";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: string;
  storeId: string;
  categoryId: string;
  name: string;
  price: string;
  description: string;
  isFeatured: boolean;
  isArchived: boolean;
  createdAt: string;
  updatedAt: string;
  images: Image[];
  category: {
    id: string;
    storeId: string;
    bannerId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
};

type Image = {
  id: string;
  productId: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

type ProductListProps = {
  product: Product[];
};

const ProductList = ({ product }: ProductListProps) => {
  return (
    <div className="mt-12 flex flex-wrap justify-start gap-x-8 gap-y-16">
      {product.map((item: Product) => (
        <Link
          key={item.id}
          href={`/${item.name.replace(/\s/g, "-").toLowerCase()}`}
          className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative h-80 w-full">
            <Image
              src={item.images[0].url}
              alt="photo"
              fill
              className="absolute z-10 h-80 w-full rounded-md object-cover duration-500 ease-in-out hover:opacity-0"
            />
            <Image
              src={item.images[1] ? item.images[1].url : item.images[0].url}
              alt="photo"
              fill
              className="absolute z-0 h-80 w-full rounded-md object-cover duration-500 ease-in-out"
            />
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-sm font-medium">{item.name}</h1>
            <p className="text-lg font-bold">
              {formatToRupiah(Number(item.price))}
            </p>
          </div>
          <p className="text-sm text-neutral-500">{item.description}</p>
          <button className="w-max rounded-2xl px-4 py-2 text-xs ring-1 ring-rose-500 transition-all duration-300 ease-in-out hover:bg-rose-500 hover:text-white">
            Tambah ke Keranjang
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
