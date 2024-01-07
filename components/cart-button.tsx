"use client";

import { useCartContext } from "@/client/cart-context";

export function CartButton() {

  const { cart, isLoaded } = useCartContext();

  return (
    <div className="absolute right-10 top-10">
      <a
        href="/cart"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-black font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-white"
        >
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
        <span className="sr-only">Shopping Cart</span>

        {/* cart count */}
        {isLoaded && (
          <div className="absolute right-0 top-0 flex h-6 w-6 -translate-y-1/3 translate-x-1/3 transform items-center justify-center rounded-full bg-[#6100FF] text-sm text-white">
            {cart.reduce((acc, { quantity }) => acc + quantity, 0)}
          </div>
        )}
      </a>
    </div>
  );
}

