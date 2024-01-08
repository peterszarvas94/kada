import { AuthContextWrapper } from "@/components/auth-context-wrapper";
import { CartContextWrapper } from "@/components/cart-context-wrapper";
import { Cart } from "@/components/cart";

export default function CartPage() {
  return (
    <CartContextWrapper>
      <AuthContextWrapper>
        <Cart />
      </AuthContextWrapper>
    </CartContextWrapper>
  );
} 
