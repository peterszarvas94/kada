function CartSkeleton() {
  return (

    <div className="flex items-center gap-4 rounded-[6.46px] border-[0.65px] border-[#DBDBDB] p-[10px]">
      {/* image */}
      <div className="flex h-20 w-20 items-center justify-center rounded-[6.01px] bg-gray-300">
        <svg
          className="h-8 w-8 text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>

      <div className="flex grow flex-col gap-1">
        {/* title */}
        <div className="h-4 w-20 rounded-full bg-gray-300" />

        {/* price */}
        <div className="h-4 w-10 rounded-full bg-gray-300" />
      </div>

      {/* buttons */}
      <div className="h-6 w-36 rounded-full bg-gray-300" />
    </div>
  );
}

export default function CartLoading() {
  return (
    <div className="flex p-10 w-full justify-center animate-pulse">
      <div className="flex w-full max-w-6xl gap-10">
        {/* left side */}
        <div className="flex grow flex-col gap-4 ">
          {/* cart items */}
          {Array.from({ length: 3 }).map((_, index) => (
            <CartSkeleton key={index} />
          ))}

          {/* total */}
        </div>

        {/* right side */}
        <div className="flex flex-col pt-1 w-32 items-end gap-4">
          <div className="h-6 w-20 rounded-full bg-gray-300" />
          <div className="h-10 w-[106px] rounded-full bg-gray-300" />
        </div>
      </div>
    </div>
  );
}

