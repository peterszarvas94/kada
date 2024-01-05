import { ProductType, getProduct } from "@/server/db";

export async function getProductFromId(idStr: string) {
  const id = parseInt(idStr);
  if (isNaN(id)) {
    throw new Error("Invalid id");
  }

  let product: ProductType | undefined;
  try {
    product = await getProduct(id);
  } catch (err) {
    throw new Error("Product not found");
  }

  return product;
}
