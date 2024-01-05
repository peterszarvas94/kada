import { getProduct } from "@/server/db";
import type { ProductType } from "@/server/db";
import Image from "next/image";
import { Suspense } from "react";

interface StarProps {
  filled: boolean;
}
function Star({ filled }: StarProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4261 1.0215C11.6777 0.573722 12.3223 0.573722 12.5739 1.0215L15.9705 7.06759C16.0645 7.23494 16.2269 7.35291 16.4151 7.39061L23.2149 8.75266C23.7185 8.85353 23.9177 9.46661 23.5696 9.84422L18.869 14.943C18.7389 15.0841 18.6769 15.275 18.6992 15.4656L19.5051 22.3535C19.5647 22.8636 19.0432 23.2425 18.5765 23.0281L12.2748 20.1332C12.1004 20.0531 11.8996 20.0531 11.7252 20.1332L5.42348 23.0281C4.95677 23.2425 4.43526 22.8636 4.49494 22.3535L5.30081 15.4656C5.32311 15.275 5.26109 15.0841 5.13099 14.943L0.430434 9.84422C0.0823079 9.46661 0.281507 8.85353 0.785105 8.75266L7.5849 7.39061C7.77311 7.35291 7.93548 7.23494 8.02949 7.06759L11.4261 1.0215Z"
        fill={filled ? "#6100FF" : "#D9D9D9"}
      />
    </svg>
  );
}

interface ChevronLeftProps {
  enabled: boolean;
}
function ChevronLeft({ enabled }: ChevronLeftProps) {
  return (
    <svg
      width="20"
      height="33"
      viewBox="0 0 20 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4207 2.0793L3 16.5L17.4207 30.9207"
        stroke="#323232"
        stroke-opacity={enabled ? 1 : 0.6}
        stroke-width="3.72147"
        stroke-linecap="round"
      />
    </svg>
  );
}

interface ChevronRightProps {
  enabled: boolean;
}
function ChevronRight({ enabled }: ChevronRightProps) {
  return (
    <svg
      width="20"
      height="34"
      viewBox="0 0 20 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.73885 31.4081L17.1595 16.9874L2.73885 2.56673"
        stroke="#323232"
        stroke-opacity={enabled ? 1 : 0.6}
        stroke-width="3.72147"
        stroke-linecap="round"
      />
    </svg>
  );
}

interface RatingProps {
  rating: number;
}
function Rating({ rating }: RatingProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star filled={i + 1 < rating} />
      ))}
      <span className="pl-2 pt-1 text-[24px] font-[600]">{rating}</span>
    </div>
  );
}

interface CircleProps {
  filled: boolean;
}
function Circle({ filled }: CircleProps) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="5.48596"
        cy="5.48596"
        r="5.48596"
        fill={filled ? "#6100FF" : "#323232"}
        opacity={filled ? 1 : 0.6}
      />
    </svg>
  );
}

function Loading() {
  return (
    <main className="flex min-h-screen animate-pulse items-center justify-center">
      <div className="flex w-full max-w-6xl items-start justify-start gap-16 px-2">
        <div className="flex flex-col gap-4">
          {/* image slider */}
          <div className="flex pb-6">
            <span className="w-14" />
            <div className="flex h-[502px] w-[481px] items-center justify-center rounded-[6.01px] bg-gray-300">
              <svg
                className="h-10 w-10 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <span className="w-14" />
          </div>
        </div>

        {/* right side */}
        <div className="flex min-h-[516px] flex-col justify-between gap-3">
          {/* name and rating */}
          <div className="flex h-[103px] w-[465px] items-end justify-between pb-4">
            <div className="h-[50px] w-40 rounded-full bg-gray-300" />
            <div className="pb-[13px]">
              <div className="h-[24px] w-56 rounded-full bg-gray-300" />
            </div>
          </div>

          {/* description */}
          <div className="flex h-[36px] items-center">
            <div className="h-[24px] w-40 rounded-full bg-gray-300" />
          </div>

          {/* stock */}
          <div className="flex h-[36px] items-center">
            <div className="h-[24px] w-40 rounded-full bg-gray-300" />
          </div>

          {/* brand */}
          <div className="flex h-[36px] items-center">
            <div className="h-[24px] w-40 rounded-full bg-gray-300" />
          </div>

          {/* category */}
          <div className="flex h-[36px] items-center">
            <div className="h-[24px] w-40 rounded-full bg-gray-300" />
          </div>

          {/* discount */}
          <div className="pt-6">
            <div className="h-[45px] w-[118px] rounded-full bg-gray-300" />
          </div>

          {/* price */}
          <div className="pb-12 pt-4">
            <div className="h-[64px] w-40 rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
    </main>
  );
}

interface ContentProps {
  idStr: string;
}
async function Content({ idStr }: ContentProps) {
  const id = parseInt(idStr);
  if (isNaN(id)) {
    return <div>ID is invalid</div>;
  }

  let product: ProductType | undefined;
  try {
    product = await getProduct(id);
  } catch (err) {
    return <div>Product not found</div>;
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-6xl items-start justify-start gap-16 px-2">
        <div className="flex flex-col gap-4">
          {/* image slider */}
          <div className="flex">
            <span className="flex w-14 items-center justify-center">
              <ChevronLeft enabled={false} />
            </span>
            <div className="relative h-[502px] w-[481px]">
              <Image
                src={product.image.src}
                alt={product.image.alt}
                fill={true}
                style={{ borderRadius: "6.01px", objectFit: "cover" }}
              />
            </div>
            <span className="flex w-14 items-center justify-center">
              <ChevronRight enabled={true} />
            </span>
          </div>

          {/* circles */}
          <div className="flex justify-center gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Circle filled={i === 0} />
            ))}
          </div>
        </div>

        {/* right side */}
        <div className="flex min-h-[516px] flex-col justify-between gap-3">
          {/* name and rating */}
          <div className="flex grow items-end">
            <div className="flex items-center justify-between gap-16">
              <h1 className="text-[48px] font-[600]">{product.name}</h1>
              <Rating rating={product.rating} />
            </div>
          </div>

          {/* description */}
          <p className="text-[24px] font-[500]">{product.description}</p>

          {/* stock */}
          <p className="text-[24px] font-[500] opacity-60">
            Stock: {product.stock}
          </p>

          {/* brand */}
          <p className="text-[24px] font-[500] opacity-60">
            Brand: {product.brand}
          </p>

          {/* category */}
          <p className="text-[24px] font-[500] opacity-60">
            Category: {product.category}
          </p>

          {/* discount */}
          <div className="pt-6">
            <div className="w-fit rounded-full bg-[#6100FF] px-[20px] py-[7.63px] text-[20px] font-[600] text-white">
              {-1 * product.discount} %
            </div>
          </div>

          {/* price */}
          <div className="grow text-[64px] font-[600]">{product.price} $</div>
        </div>
      </div>
    </main>
  );
}

interface PageProps {
  params: {
    id: string;
  };
}
export default function Page({ params }: PageProps) {
  return (
    <Suspense fallback={<Loading />}>
      <Content idStr={params.id} />
    </Suspense>
  );
}

