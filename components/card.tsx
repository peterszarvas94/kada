import Image from "next/image";

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
export function Card({ id, name, description, price, discount, image }: CardProps) {
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
