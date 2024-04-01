import { IProductImagesMock } from "@/interfaces/IProductImagesMock";
import { getStrapiURL } from "@/lib/utils";
import Image from "next/image";

interface ItemDetailImagesPros {
  mocks: IProductImagesMock;
}

const baseUrl = getStrapiURL();

export default function ItemDetailThumbnailImages({ mocks }: ItemDetailImagesPros) {
  return (
    <div className="md:flex gap-4 items-start">
      {mocks.data.map((img) => (
        <button
          key={img.id}
          className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50"
        >
          <Image
            alt={img.alternativeText}
            className="aspect-square object-cover"
            height={100}
            src={`${baseUrl}${img.formats.thumbnail.url}`}
            width={100}
          />
          <span className="sr-only">View Image 1</span>
        </button>
      ))}
    </div>
  );
}
