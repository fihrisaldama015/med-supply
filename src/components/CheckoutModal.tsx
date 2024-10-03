import { useRouter } from "next/navigation";
import React, { useState } from "react";

type CheckoutModalProps = {
  show: boolean;
};

const method = [
  {
    id: 1,
    name: "Cash On Delivery",
    description: "Pembayaran dilakukan saat barang diterima",
  },
  {
    id: 2,
    name: "Whatsapp",
    description: "Pembayaran dilakukan melalui Whatsapp",
  },
];

const CheckoutModal = ({ show }: CheckoutModalProps) => {
  const [selectedMethod, setSelectedMethod] = React.useState<number | null>(
    null,
  );

  const router = useRouter();

  const close = () => {
    router.push("/cart");
    router.refresh();
  };
  return (
    <div className="h-max" style={{ display: show ? "" : "none" }}>
      <div className="pointer-events-none fixed left-0 top-0 h-screen w-screen bg-black/20"></div>
      <div
        className={`absolute left-1/2 ${selectedMethod !== null ? "top-96" : "top-64"} z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-6 rounded-md bg-white px-12 py-6 shadow-lg`}
      >
        <h1 className="text-lg font-medium">Pilih Metode Pembayaran</h1>
        <div className="flex gap-4">
          {method.map((item) => (
            <div
              onClick={() => setSelectedMethod(item.id)}
              className={`flex h-36 w-48 cursor-pointer items-center justify-center rounded-md text-center transition-all  ${selectedMethod === item.id ? "bg-blue-50 ring-2 ring-blue-300" : "ring-1 ring-slate-300 hover:bg-slate-100"}`}
            >
              {item.name}
            </div>
          ))}
        </div>
        {selectedMethod && selectedMethod === 1 ? (
          <div className="flex flex-col gap-2">
            <div className="text-lg font-medium">Kode Pos</div>
            <input
              type="number"
              placeholder="Kode Pos"
              className="rounded-md border border-slate-300 p-2"
            />
            <div className="text-lg font-medium">No Telepon</div>
            <input
              type="text"
              placeholder="Nomor Telepon"
              className="rounded-md border border-slate-300 p-2"
            />
            <div className="text-lg font-medium">Nama Penerima</div>
            <input
              type="text"
              placeholder="Nama Penerima"
              className="rounded-md border border-slate-300 p-2"
            />
            <div className="text-lg font-medium">Alamat Pengiriman</div>
            <textarea
              className="h-24 w-full rounded-md border border-slate-300 p-2"
              placeholder="Alamat Pengiriman"
            ></textarea>
          </div>
        ) : (
          selectedMethod === 2 && (
            <div className="flex flex-col gap-2">
              <div className="text-lg font-medium">Nama Penerima</div>
              <input
                type="text"
                placeholder="Nama Penerima"
                className="rounded-md border border-slate-300 p-2"
              />
              <div className="text-lg font-medium">Alamat Pengiriman</div>
              <textarea
                className="h-24 w-full rounded-md border border-slate-300 p-2"
                placeholder="Alamat Pengiriman"
              ></textarea>
            </div>
          )
        )}
        <div className="flex justify-between">
          <button
            className="bg-red-500 rounded-md px-4 py-2 text-rose-500"
            onClick={close}
          >
            Batal
          </button>
          <button className="rounded-md bg-slate-800 px-4 py-2 text-white">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
