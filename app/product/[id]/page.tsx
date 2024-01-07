import { Suspense } from "react";
import { ProductDetails, ProductDetailsLoading } from "@/components/product-details-loading";
import { Metadata } from "next";
import { getProduct } from "@/server/db";

type RouteProps = {
  params: { id: string }
}
export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  try {
    const product = await getProduct(params.id);
    return {
      title: product.title,
      description: product.description,
    };
  } catch (err) {
    return {
      title: 'The Cool Shop',
      description: 'Very cool shop indeed',
    };
  }
}

interface ProductPageProps {
  params: {
    id: string;
  };
}
export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense fallback={<ProductDetailsLoading />}>
      <ProductDetails idStr={params.id} />
    </Suspense>
  );
}

