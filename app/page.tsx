import { Suspense } from "react";
import { HomeLoading, ListWrapper } from "@/components/home-loading";
import { CartButton } from "@/components/cart-button";
import { CartContextWrapper } from "@/components/cart-context-wrapper";

export default function HomePage() {
  return (
    <CartContextWrapper>
      <main className="relative min-h-screen mb-10">
        <CartButton />
        <div className="pb-[40px] pt-24 sm:pt-[60px]">
          <h1 className="flex justify-center text-3xl sm:text-[48px] font-[600]">
            See Products
          </h1>
        </div>
        <Suspense fallback={<HomeLoading />}>
          <ListWrapper />
        </Suspense>
      </main>
    </CartContextWrapper>
  );
}

