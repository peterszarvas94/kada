"use client";

import { CartType, useCartContext } from "@/client/cart-context";
import { setCartToLocalStorage } from "@/client/local-storage";
import { ProductType } from "@/server/db";

interface AddToCartProps {
  item: ProductType;
}
export default function AddToCart({ item }: AddToCartProps) {
  const { cart, setCart, cartLoaded: isLoaded } = useCartContext();

  return (
    <div className="pt-4">
      <button
        className="rounded-full bg-black px-14 py-3 text-[28px] font-[600] text-white disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!isLoaded}
        onClick={() => {
          if (!isLoaded) return;
          const existingItem = cart.find(
            (cartItem) => cartItem.product.id === item.id,
          );
          let newCart: CartType = [];

          if (existingItem) {
            newCart = cart.map((cartItem) => {
              if (cartItem.product.id === item.id) {
                return {
                  product: item,
                  quantity: cartItem.quantity + 1,
                };
              }
              return cartItem;
            });
          } else {
            newCart = [...cart, { product: item, quantity: 1 }];
          }

          setCart(newCart);
          setCartToLocalStorage(newCart);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

