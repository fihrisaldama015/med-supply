"use client";

import Add from "@/components/Add";
import CustomizeProduct from "@/components/CustomizeProduct";
import ProductImages from "@/components/ProductImages";
import { formatToRupiah } from "@/utils/helper/formatCurrency";

import { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  isDiscounted: boolean;
  discountPercentage: number;
  stock: number;
  description: string;
  images: ProductImage[];
  productDetail: string;
};

type ProductImage = {
  id: number;
  url: string;
};

const SinglePage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const [product, setProduct] = useState(dummy);

  return (
    <div className="relative flex flex-col gap-16 px-4 md:px-8 lg:flex-row lg:px-16 xl:px-32 2xl:px-64">
      {/* IMG */}
      <div className="top-20 h-max w-full lg:sticky lg:w-1/2">
        <ProductImages images={product.images} />
      </div>
      {/* Text */}
      <div className="flex w-full flex-col gap-6 lg:w-1/2">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-neutral-500">{product.description}</p>
        <div className="h-[2px] bg-neutral-100"></div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <h3 className="text-base text-rose-500 line-through">
              {formatToRupiah(product.price)}
            </h3>
            <div
              className="rounded-md bg-rose-500 px-2 py-1 text-sm font-medium text-white
            "
            >
              {product.discountPercentage}%
            </div>
          </div>
          <h2 className="text-3xl font-semibold">
            {formatToRupiah(
              ((100 - product.discountPercentage) / 100) * product.price,
            )}
          </h2>
        </div>
        <div className="h-[2px] bg-neutral-100"></div>
        <CustomizeProduct />
        <Add stock={4} />
        <div className="h-[2px] bg-neutral-100"></div>
        <div className="text-sm">
          <h4 className="mb-4 text-lg font-medium">Informasi Produk</h4>
          <p>{product.productDetail}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;

const dummy: Product = {
  id: "1",
  name: "Product Name",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit fugiat neque quos? Ut illo provident vitae excepturi adipisci dolorem? Iste, at alias? Assumenda atque minus accusamus nobis vitae voluptates nostrum.",
  productDetail:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, assumenda fugit consectetur facere aspernatur perferendis quam officia nulla distinctio nihil explicabo at in eaque. Provident inventore enim corrupti architecto sed!",
  price: 120000,
  discountPercentage: 16,
  isDiscounted: true,
  stock: 4,
  images: [
    {
      id: 1,
      url: "https://picsum.photos/500/500",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/28585011/pexels-photo-28585011/free-photo-of-cetakan-gambar-ekg-rinci-pada-monitor-jantung.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
};
