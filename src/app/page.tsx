import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Med Supply | Jual Beli Alat Kesehatan",
  description:
    "Med Supply adalah platform jual beli alat kesehatan, obat-obatan, dan perlengkapan medis",
};

export default function Home() {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Produk Unggulan</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="mb-12 px-4 text-2xl md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Kategori
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Produk Baru</h1>
        <ProductList />
      </div>
    </div>
  );
}
