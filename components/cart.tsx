"use client";

import { useCartContext } from "@/client/cart-context";
import HomeButton from "./home-button";
import CartItem from "./cart-item";
import CartLoading from "./cart-loading";
import { useAuthContext } from "@/client/auth-context";
import { SignOutButton } from "./sign-out-button";
import { SignInButton } from "./sign-in-button";
import { SignInForm } from "./sign-in-form";
import { SignUpForm } from "./sign-up-form";

export function Cart() {
  const { cart, cartLoaded } = useCartContext();
  const { user, overlay, setOverlay } = useAuthContext();

  if (overlay === "sign-in-form" && !user) {
    return <SignInForm />;
  }

  if (overlay == "sign-up-form" && !user) {
    return <SignUpForm />;
  }

  return (
    <main className="relative">
      <HomeButton />
      {user ? <SignOutButton /> : <SignInButton />}

      <div className="pb-[40px] pt-24 sm:pt-[60px]">
        <h1 className="flex text-center justify-center text-3xl sm:text-[48px] font-[600]">
          Shopping Cart
        </h1>
      </div>

      {!cartLoaded ? (
        <CartLoading />
      ) : (
        <div className="flex w-full justify-center p-10">
          <div className="flex flex-col sm:flex-row w-full max-w-6xl gap-10">
            <div className="flex grow flex-col gap-4">
              {cart.length === 0 ? (
                <div className="flex h-[102px] items-center rounded-[6.46px] border-[0.65px] border-[#DBDBDB] px-8 text-lg">
                  No items in cart
                </div>
              ) : (
                cart.map((item) => (
                  <CartItem
                    key={item.product.id}
                    product={item.product}
                    quantity={item.quantity}
                  />
                ))
              )}
            </div>
            <div className="min-w-32 flex flex-col items-end gap-4">
              <h2 className="text-xl font-semibold">
                {`Total: ${cart.reduce(
                  (acc, { product, quantity }) =>
                    acc + product.price * quantity,
                  0,
                )} $`}
              </h2>
              <button
                onClick={() => {
                  if (user) {
                    alert("Thank you for your purchase!");
                  } else {
                    setOverlay("sign-in-form");
                  }
                }}
                className="flex w-fit justify-center rounded-full bg-black px-4 py-2 text-[16px] font-[600] text-white"
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

