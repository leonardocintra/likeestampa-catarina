import Image from "next/image";
import { IProduct } from "../../interfaces/IProduct";
import Link from "next/link";

type ProductCardProps = {
  product: IProduct;
};

export default function ProductCard(props: ProductCardProps) {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link
        href={`/product/${props.product.slug}`}
        className="block relative h-48 rounded overflow-hidden hover:shadow-xl"
      >
        <Image
          width={421}
          height={261}
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={"/421x261.png"}
        />
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          #{props.product.id} -{" "}
          {props.product.categories
            .filter((c) => c.parentId !== null)
            .map((c) => c.name)}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {props.product.name}
        </h2>
        <p className="mt-1">R$ {props.product.price}</p>
      </div>
    </div>
  );
}
