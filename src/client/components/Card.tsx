"use client";

import ImageOverlay from "@components/ImageOverlay";
import { TGeometry } from "@schemas/GeometrySchema";
import { cn } from "@shared/utils";
import Link from "next/link";
import { useState } from "react";

export default function Card({ value }: { value: TGeometry }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      className="relative flex w-full cursor-pointer flex-col gap-2 duration-[0.5s] ease-[ease-in-out] hover:opacity-[100] hover:transition-opacity"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={value.route}
    >
      <div
        className={cn(
          "item absolute bottom-0 left-0 z-30 hidden w-full items-start justify-between px-5 pb-5 opacity-0 transition-opacity duration-300 ease-in-out md:flex lg:px-5 lg:pb-5",
          { "opacity-100": isHovered },
        )}
      >
        <div className="text-secondary dark:text-black">
          <h4 className="py-2 text-[14px] lg:text-3xl">
            {value.title}
          </h4>
          <h4 className="py-2 inline text-[14px] lg:text-xl">
            {value.description}
          </h4>
        </div>


      </div>
      <ImageOverlay isHovered={isHovered} image={value.image} />
      <div className="flex justify-between text-2xl md:hidden text-black">
        {value.title}
      </div>
      <div className="flex justify-between text-base md:hidden text-third">
        {value.description}
      </div>
    </Link>
  );
}



export function CardSkeleton() {
  return (
    <div className="relative flex w-full cursor-pointer flex-col gap-2">
      <div className="justify-cente sm:h-[496px] h-[308px] w-full rounded-xl bg-primary bg-cover bg-center object-cover" />
    </div>
  );
}

