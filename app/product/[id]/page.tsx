import { Suspense } from "react";
import { Details, DetailsLoading } from "@/components/product";
import { Metadata } from "next";
import { getProductFromId } from "@/utils/product";

type RouteProps = {
  params: { id: string }
}
export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  try {
    const product = await getProductFromId(params.id);
    return {
      title: product.name,
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
    <>
      <Suspense fallback={<DetailsLoading />}>
        <Details idStr={params.id} />
      </Suspense>
    </>
  );
}

