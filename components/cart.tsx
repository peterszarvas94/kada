"use client";

import { useCartContext } from "@/client/cart-context";
import HomeButton from "./home-button";
import CartItem from "./cart-item";
import CartLoading from "./cart-loading";

export default function Cart() {
  const { cart, isLoaded } = useCartContext();

  return (
    <main className="relative">
      <HomeButton />
      <div className="pb-[40px] pt-[60px]">
        <h1 className="flex justify-center text-[48px] font-[600]">
          Shopping Cart
        </h1>
      </div>

      {!isLoaded ? (
        <CartLoading />
      ) : (
        <div className="flex p-10 w-full justify-center">
          <div className="flex w-full max-w-6xl gap-10">
            <div className="flex grow flex-col gap-4 ">
              {cart.map((item) => (
                <CartItem
                  key={item.product.id}
                  product={item.product}
                  quantity={item.quantity}
                />
              ))}
            </div>
            <div className="flex flex-col min-w-32 items-end gap-4">
              <h2 className="text-xl font-semibold">
                {`Total: ${cart.reduce(
                  (acc, { product, quantity }) => acc + product.price * quantity,
                  0,
                )} $`}
              </h2>
              <button className="flex w-fit justify-center rounded-full bg-black px-4 py-2 text-[16px] font-[600] text-white">
                Purchase
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

