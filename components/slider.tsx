"use client";

import { useState } from "react";
import Image from "next/image";
import type { ImageType } from "@/server/db";
import { ChevronLeft, ChevronRight } from "./chevron";
import { Circle } from "./circle";

interface SliderProps {
  images: ImageType[];
}

export function Slider({ images }: SliderProps) {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex">
        <button
          aria-label="previous image"
          className="flex w-14 items-center justify-start"
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
            }
          }}
        >
          <ChevronLeft enabled={index > 0} />
        </button>
        <div className="relative h-[502px] w-[481px]">
          {images.map((image, i) => (
            <Image
              key={i}
              src={image.src}
              alt={image.alt}
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
          className="flex w-14 items-center justify-end"
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
            className="flex w-6 h-6 items-center justify-center"
          >
            <Circle filled={i === index} />
          </button>
        ))}
      </div>
    </div>
  );
}

