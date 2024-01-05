import { Suspense } from "react";
import Image from "next/image";
import { Details, DetailsLoading } from "@/components/product";
import { getProduct } from "@/server/db";
import type { ProductType } from "@/server/db";

interface ProductPageProps {
  params: {
    id: string;
  };
}
export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense fallback={<DetailsLoading />}>
      <Details idStr={params.id} />
    </Suspense>
  );
}

