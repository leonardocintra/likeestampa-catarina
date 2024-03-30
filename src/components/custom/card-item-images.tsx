import { IProductImagesMock } from "@/interfaces/IProductImagesMock";
import { getStrapiURL } from "@/lib/utils";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface CardItemImagesProps {
  mocks: IProductImagesMock;
}

const baseUrl = getStrapiURL();

export default function CardItemImages({ mocks }: CardItemImagesProps) {
  return (
    <div className="aspect-w-4 aspect-h-5 overflow-hidden rounded-lg">
      <Carousel>
        <CarouselContent>
          {mocks.data.map((img) => (
            <CarouselItem key={img.id}>
              <Image
                alt={img.alternativeText}
                className="object-center object-cover"
                height={500}
                src={`${baseUrl}${img.formats.medium.url}`}
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
