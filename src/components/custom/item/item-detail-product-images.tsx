"use client";

import { IProductImagesMock } from "@/interfaces/IProductImagesMock";
import Image from "next/image";
import { useState } from "react";

interface ItemDetailImagesPros {
  mocks: IProductImagesMock;
}
export default function ItemDetailProductImages({
  mocks,
}: ItemDetailImagesPros) {
  const mock = mocks.data[0];

  const [urlImageLarge, setUrlImageLarge] = useState<string>(
    mock.formats.medium.url
  );

  return (
    <div className="grid gap-4 md:gap-6">
      <Image
        alt={mock.alternativeText}
        className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
        height={600}
        src={urlImageLarge}
        width={600}
      />

      <div className="flex gap-4 items-start">
        {mocks.data.map((img) => (
          <button
            onClick={() => setUrlImageLarge(img.formats.medium.url)}
            key={img.id}
            className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50"
          >
            <Image
              alt={img.alternativeText}
              className="aspect-square object-cover"
              height={100}
              src={`${img.formats.thumbnail.url}`}
              width={100}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
