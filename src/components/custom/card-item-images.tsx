"use client";

import { IProductImagesMock } from "@/interfaces/IProductImagesMock";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface CardItemImagesProps {
  mocks: IProductImagesMock;
}

export default function CardItemImages({ mocks }: CardItemImagesProps) {
  return (
    <div className="aspect-w-4 aspect-h-5 overflow-hidden rounded-lg">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {mocks.data.map((img) => (
            <CarouselItem key={img.id}>
              <Image
                alt={img.alternativeText}
                className="object-center object-cover"
                height={500}
                src={`${img.formats.medium.url}`}
                style={{
                  aspectRatio: "400/500",
                  objectFit: "cover",
                }}
                width={400}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
