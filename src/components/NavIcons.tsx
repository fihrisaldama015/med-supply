"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  IoCartOutline,
  IoNotificationsOutline,
  IoPersonOutline,
} from "react-icons/io5";
import CartModal from "./CartModal";
import { ProductCart } from "@/types/type";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<ProductCart[]>([]);

  const router = useRouter();
  const pathname = usePathname();

  const isLoggedIn = false;

  if (typeof window === "undefined") return null;

  const cart = localStorage.getItem("cart");

  useEffect(() => {
    if (pathname === "/cart") {
      console.log("🚀 ~ useEffect ~ pathname:", pathname);
      setIsCartOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
    // Listen for 'cart-updated' event
    const handleCartUpdate = () => {
      const updatedCart = localStorage.getItem("cart");
      if (updatedCart) {
        setCartItems(JSON.parse(updatedCart));
      }
    };
    window.addEventListener("cart-updated", handleCartUpdate);

    return () => {
      window.removeEventListener("cart-updated", handleCartUpdate);
    };
  }, []);

  const removeProductFromCart = (id: string) => {
    if (!cartItems) return;
    const newCart = cartItems.filter((item: ProductCart) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCartItems(newCart);
  };

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };
  return (
    <div className="relative flex gap-4 xl:gap-6">
      <IoPersonOutline
        className="h-6 w-6 cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute left-0 top-12 z-20 rounded-md bg-white p-4 text-sm shadow-lg">
          <Link href="/profile">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <IoNotificationsOutline className="h-6 w-6 cursor-pointer" />
      <div className="relative">
        <IoCartOutline
          className="h-6 w-6 cursor-pointer"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div
          style={{ display: cartItems.length === 0 ? "none" : "" }}
          className="absolute -right-4 -top-4 flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-sm text-white"
        >
          {cartItems.length}
        </div>
        {isCartOpen && (
          <CartModal cartItems={cartItems} remove={removeProductFromCart} />
        )}
      </div>
    </div>
  );
};

export default NavIcons;
