import Cart from "@/components/cart";
import { CartContextWrapper } from "@/components/cart-context-wrapper";

export default function CartPage() {
  return (
    <CartContextWrapper>
      <Cart />
    </CartContextWrapper>
  );
} 
