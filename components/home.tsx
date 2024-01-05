import Image from "next/image";
import { getProducts } from "@/server/db";

// list of products
interface CardPictureProps {
  src: string;
  alt: string;
}
function CardPicture({ src, alt }: CardPictureProps) {
  return (
    <Image src={src} alt={alt} fill={true} style={{ borderRadius: "6.46px" }} />
  );
}

interface CardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  image: {
    src: string;
    alt: string;
  };
}
function Card({ id, name, description, price, discount, image }: CardProps) {
  return (
    <li className="flex h-fit w-fit flex-col gap-[10px] rounded-[6.46px] border-[0.65px] border-[#DBDBDB] p-[10px]">
      <div className="relative h-[149px] w-[282px]">
        <div className="absolute h-full w-full rounded-[6.46px]">
          <CardPicture src={image.src} alt={image.alt} />
        </div>
        <div className="absolute right-[10px] top-[10px] rounded-full bg-[#6100FF] px-[16.16px] py-[4.52px] text-[14px] font-[600] text-white">
          {-1 * discount} %
        </div>
      </div>
      <div className="flex w-[282px] gap-[4px]">
        <div className="grow flex-col">
          <h2 className="line-clamp-1 text-[20px] font-[600]">{name}</h2>
          <p className="line-clamp-2 min-h-[46px] text-[14px] font-[500]">
            {description}
          </p>
        </div>
        <p className="text-[24px] font-[600]">{price}&nbsp;$</p>
      </div>
      <a
        href={`/product/${id}`}
        className="flex justify-center rounded-full bg-black pb-[8px] pt-[10px] text-[16px] font-[600] text-white"
      >
        See details
      </a>
    </li>
  );
}

export async function List() {
  const data = await getProducts();

  return (
    <ul className="grid-cols-shop grid justify-center gap-[16px] p-10 px-[87px]">
      {data.map((item) => (
        <Card
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          discount={item.discount}
          image={item.image}
        />
      ))}
      {data.map((item) => (
        <Card
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          discount={item.discount}
          image={item.image}
        />
      ))}
    </ul>
  );
}

// loading state
function Skeleton() {
  return (
    <li
      role="status"
      className="flex h-fit w-fit animate-pulse flex-col gap-[10px] rounded-[6.46px] border-[0.65px] border-[#DBDBDB] p-[10px]"
    >
      <div className="flex h-[149px] w-[282px] items-center justify-center rounded-[6.46px] bg-gray-300">
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
      <div className="flex w-[282px] gap-[4px]">
        <div className="grow flex-col">
          <div className="h-[30px] py-[4px]">
            <div className="h-full w-40 rounded-full bg-gray-300" />
          </div>
          <div className="h-[23px] py-[6px]">
            <div className="h-full w-28 rounded-full bg-gray-300" />
          </div>
          <div className="h-[23px] py-[6px]">
            <div className="h-full w-28 rounded-full bg-gray-300" />
          </div>
        </div>
        <div className="h-[30px] py-[4px]">
          <div className="h-full w-20 rounded-full bg-gray-300" />
        </div>
      </div>
      <div className="h-[42px] rounded-full bg-gray-300" />
    </li>
  );
}

export function HomeLoading() {
  return (
    <ul className="grid-cols-shop grid justify-center gap-[16px] p-10 px-[87px]">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} />
      ))}
    </ul>
  );
}

