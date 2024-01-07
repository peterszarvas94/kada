import type { CartType } from "@/client/cart-context";
import { cartSchema } from "@/client/cart-context";

export function getCartFromLocalStorage(): CartType {
  const storageStr = localStorage.getItem("cart");
  const rawCart = storageStr ? JSON.parse(storageStr) : [];

  try {
    const cart = cartSchema.parse(rawCart);
    return cart;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function setCartToLocalStorage(cart: CartType) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function clearCartFromLocalStorage() {
  localStorage.removeItem("cart");
}
