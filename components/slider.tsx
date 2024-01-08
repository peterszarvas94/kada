"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "./chevron";
import { Circle } from "./circle";

interface SliderProps {
  images: string[];
  alt: string;
}

export function Slider({ images, alt }: SliderProps) {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex">
        <button
          aria-label="previous image"
          className="flex w-8 sm:w-14 items-center justify-start"
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
            }
          }}
        >
          <ChevronLeft enabled={index > 0} />
        </button>
        <div className="relative h-52 w-52 sm:h-[502px] sm:w-[481px]">
          {images.map((image, i) => (
            <Image
              key={i}
              src={image}
              alt={alt}
              fill={true}
              style={{
                borderRadius: "6.01px",
                objectFit: "cover",
                display: i === index ? "block" : "none",
              }}
            />
          ))}
        </div>
        <button
          aria-label="next image"
          className="flex w-8 sm:w-14 items-center justify-end"
          onClick={() => {
            if (index < images.length - 1) {
              setIndex(index + 1);
            }
          }}
        >
          <ChevronRight enabled={index < images.length - 1} />
        </button>
      </div>

      {/* circles */}
      <div className="flex justify-center">
        {images.map((_, i) => (
          <button
            onClick={() => setIndex(i)}
            aria-label={`image ${i + 1}`}
            key={i}
            className="flex h-6 w-6 items-center justify-center"
          >
            <Circle filled={i === index} />
          </button>
        ))}
      </div>
    </div>
  );
}

