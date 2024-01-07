import { Suspense } from "react";
import { HomeLoading, List } from "@/components/home";
import { CartButton } from "@/components/cart-button";
import { CartContextWrapper } from "@/components/cart-context-wrapper";

export default function HomePage() {

  return (
    <CartContextWrapper>
      <main className="relative">
        <CartButton />
        <div className="pb-[40px] pt-[60px]">
          <h1 className="flex justify-center text-[48px] font-[600]">
            See Products
          </h1>
        </div>
        <Suspense fallback={<HomeLoading />}>
          <List />
        </Suspense>
      </main>
    </CartContextWrapper>
  );
}

