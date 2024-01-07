"use client";

import { CartContextProvider } from "@/client/cart-context";
import { ReactNode } from "react";

interface CartContextWapperProps {
  children: ReactNode;
}
export function CartContextWrapper({ children }: CartContextWapperProps) {
  return (
    <CartContextProvider>
      {children}
    </CartContextProvider>
  );
}
