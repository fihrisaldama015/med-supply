"use client";

import { Product, ProductCart } from "@/types/type";
import { formatToRupiah } from "@/utils/helper/formatCurrency";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CartModalProps = {
  cartItems: ProductCart[];
  remove: (id: string) => void;
};

const CartModal = ({ cartItems, remove }: CartModalProps) => {
  const subtotal = cartItems.reduce(
    (acc: number, item: ProductCart) =>
      acc + Number(item.price) * item.quantity,
    0,
  );

  return (
    <div className="absolute right-0 top-12 z-20 flex w-max flex-col gap-6 rounded-md bg-white p-4 shadow-lg">
      {cartItems.length === 0 ? (
        <div className="text-sm text-neutral-700">Keranjang masih kosong. </div>
      ) : (
        <>
          <h2 className="text-xl">Keranjang</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            {cartItems.map((item: ProductCart) => (
              <div key={item.id} className="flex gap-4">
                <Image
                  src={item.images[0].url}
                  width={72}
                  height={96}
                  alt="logo"
                  className="rounded-md object-cover"
                />
                <div className="flex w-full flex-col justify-between">
                  {/* TOP */}
                  <div>
                    {/* TITLE */}
                    <div className="flex items-center justify-between gap-8">
                      {/* make elipsis */}
                      <h3 className="max-w-56 overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
                        {item.name}
                      </h3>
                      <div className="rounded-sm bg-neutral-100 p-1">
                        {formatToRupiah(Number(item.price))}
                      </div>
                    </div>
                    {/* DESC */}
                    <div className="max-h-10 max-w-56 overflow-hidden text-sm text-neutral-500">
                      {item.description}
                    </div>
                  </div>
                  {/* BOTTOM */}
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-neutral-900">
                      Qty. {item.quantity}
                    </span>
                    <span
                      className="cursor-pointer text-blue-500"
                      onClick={() => remove(item.id)}
                    >
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* BOTTOM */}
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>{formatToRupiah(subtotal)}</span>
            </div>
            <p className="mb-4 mt-2 text-sm text-neutral-500">
              Ongkir dan Pajak dihitung saat Checkout
            </p>
            <div className="flex justify-between text-sm">
              <Link href="/cart">
                <button className="rounded-md px-4 py-3 ring-1 ring-neutral-300">
                  Lihat Keranjang
                </button>
              </Link>
              <Link href="/cart?action=checkout">
                <button className="rounded-md bg-black px-4 py-3 text-white">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
