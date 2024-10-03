import { Product, Sort } from "@/types/type";
import { formatToRupiah } from "@/utils/helper/formatCurrency";
import { createSlugFromName } from "@/utils/helper/slug";
import Image from "next/image";
import Link from "next/link";

type ProductListProps = {
  product: Product[];
  newest?: boolean;
  featured?: boolean;
  category?: string;
  sort?: Sort;
  search?: string;
};

const ProductList = ({
  product,
  newest,
  featured,
  category,
  sort,
  search,
}: ProductListProps) => {
  if (newest) {
    product = product.slice(0, 4);
  }
  if (featured) {
    product = product.filter((item: Product) => item.isFeatured === true);
  }
  if (category && category !== "all") {
    const filteredData = product.filter(
      (product: Product) => product.category.name === category,
    );
    product = filteredData;
  }
  if (sort) {
    if (sort === "price_asc") {
      product = product.sort(
        (a: Product, b: Product) => Number(a.price) - Number(b.price),
      );
    }
    if (sort === "price_desc") {
      product = product.sort(
        (a: Product, b: Product) => Number(b.price) - Number(a.price),
      );
    }
    if (sort === "newest") {
      product = product.sort(
        (a: Product, b: Product) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    }
    if (sort === "oldest") {
      product = product.sort(
        (a: Product, b: Product) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    }
  }
  if (search) {
    product = product.filter((item: Product) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
  }
  return (
    <div className="mt-12 flex flex-wrap items-stretch justify-start gap-x-8 gap-y-16">
      {product.length === 0 && <p>Produk tidak ditemukan</p>}
      {product.map((item: Product) => (
        <Link
          key={item.id}
          href={`/${createSlugFromName(item.name)}`}
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
          <p className="mt-auto max-h-16 overflow-hidden text-sm text-neutral-500">
            {item.description}
          </p>
          <button className="w-max rounded-2xl px-4 py-2 text-xs ring-1 ring-rose-500 transition-all duration-300 ease-in-out hover:bg-rose-500 hover:text-white">
            Tambah ke Keranjang
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
