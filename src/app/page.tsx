import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Med Supply | Jual Beli Alat Kesehatan",
  description:
    "Med Supply adalah platform jual beli alat kesehatan, obat-obatan, dan perlengkapan medis",
};

const fetchProduct = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/389fa5d0-fcc1-438e-a1b8-ea9899e17a66/products`,
    {
      next: {
        revalidate: 60,
      },
    },
  );
  const data = await res.json();
  return data;
};

export default async function Home() {
  const allProduct = await fetchProduct();

  if (!allProduct) {
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Produk Unggulan</h1>
        <ProductList product={allProduct} />
      </div>
      <div className="mt-24">
        <h1 className="mb-12 px-4 text-2xl md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Kategori
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Produk Baru</h1>
        {/* <ProductList /> */}
      </div>
    </div>
  );
}
