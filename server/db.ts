import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discountPercentage: z.number(),
  rating: z.number(),
  stock: z.number(),
  brand: z.string(),
  category: z.string(),
  thumbnail: z.string(),
  images: z.array(z.string()),
})
export type ProductType = z.infer<typeof productSchema>;

export const productsSchema = z.array(productSchema);
export type ProductsType= z.infer<typeof productsSchema>;

export async function getProducts(): Promise<ProductsType> {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const rawProducts = data.products;

  const products = productsSchema.parse(rawProducts);
  return products;
}

export async function getProduct(id: string): Promise<ProductType> {
  const url = `https://dummyjson.com/products/${id}`;
  const res = await fetch(url);
  const rawProduct = await res.json();

  const product = productSchema.parse(rawProduct);
  return product;
}

