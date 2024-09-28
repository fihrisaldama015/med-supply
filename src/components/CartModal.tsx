"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems: any[] = [
    {
      id: 1,
      name: "Item 1",
      quantity: 1,
      price: 100,
    },
    {
      id: 2,
      name: "Item 2",
      quantity: 2,
      price: 200,
    },
  ];
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
            {cartItems.map((item, index) => (
              <div key={index} className="flex gap-4">
                <Image
                  src="/logo.png"
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
                      <h3 className="font-semibold">Product Name</h3>
                      <div className="rounded-sm bg-neutral-100 p-1">
                        Rp.100
                      </div>
                    </div>
                    {/* DESC */}
                    <div className="text-sm text-neutral-500">available</div>
                  </div>
                  {/* BOTTOM */}
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Qty. 2</span>
                    <span className="cursor-pointer text-blue-500">Remove</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* BOTTOM */}
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>Rp.100</span>
            </div>
            <p className="mb-4 mt-2 text-sm text-neutral-500">
              Ongkir dan Pajak dihitung saat Checkout
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md px-4 py-3 ring-1 ring-neutral-300">
                Lihat Keranjang
              </button>
              <button className="rounded-md bg-black px-4 py-3 text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
