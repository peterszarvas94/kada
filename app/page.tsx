import { Suspense } from "react";
import { HomeLoading, List } from "@/components/home";

export default function HomePage() {
  return (
    <main>
      <div className="pb-[40px] pt-[60px]">
        <h1 className="flex justify-center text-[48px] font-[600]">
          See Products
        </h1>
      </div>
      <Suspense fallback={<HomeLoading />}>
        <List />
      </Suspense>
    </main>
  );
}

