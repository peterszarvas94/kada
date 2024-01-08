"use client";

import Image from "next/image";
import { ProductType } from "@/server/db";
import { useCartContext } from "@/client/cart-context";
import { setCartToLocalStorage } from "@/client/local-storage";

interface CartItemProps {
  product: ProductType;
  quantity: number;
}
export default function CartItem({ product, quantity }: CartItemProps) {
  const { cart, setCart } = useCartContext();

  return (
    <div className="items-left flex flex-col gap-4 rounded-[6.46px] border-[0.65px] border-[#DBDBDB] p-[10px] sm:flex-row sm:items-center">
      {/* image */}
      <a
        href={`/product/${product.id}`}
        className="relative hidden h-20 w-20 sm:block"
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill={true}
          style={{
            borderRadius: "6.01px",
            objectFit: "contain",
          }}
        />
      </a>

      <div className="flex grow flex-col gap-1">
        {/* title */}
        <a href={`/product/${product.id}`} className="text-lg font-semibold">
          {product.title}
        </a>

        {/* price */}
        <div>{`${product.price} $`}</div>
      </div>

      <div className="flex justify-between sm:items-center sm:gap-2">
        <div className="flex gap-2 self-end sm:self-auto">
          {/* minus */}
          <button
            className="rounded-full text-black"
            onClick={() => {
              const newCart = cart.map((item) => {
                if (item.product.id === product.id) {
                  return {
                    product,
                    quantity: item.quantity - 1,
                  };
                }
                return item;
              });
              const filteredCart = newCart.filter((item) => item.quantity > 0);
              setCart(filteredCart);
              setCartToLocalStorage(filteredCart);
            }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
            </svg>
          </button>

          {/* quantity */}
          <div className="text-xl font-semibold">{quantity}</div>

          {/* plus */}
          <button
            className="rounded-full text-black"
            onClick={() => {
              const newCart = cart.map((item) => {
                if (item.product.id === product.id) {
                  return {
                    product,
                    quantity: item.quantity + 1,
                  };
                }
                return item;
              });
              setCart(newCart);
              setCartToLocalStorage(newCart);
            }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
            </svg>
          </button>
        </div>

        {/* delete */}
        <button
          onClick={() => {
            const filteredCart = cart.filter(
              (cartItem) => cartItem.product.id !== product.id,
            );
            setCart(filteredCart);
            setCartToLocalStorage(filteredCart);
          }}
          className="w-fit self-end rounded-full bg-red-700 p-2 text-2xl text-white sm:self-auto"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

