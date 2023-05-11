import { IProduct } from "../../interfaces/IProduct";

type ProductCardProps = {
  product: IProduct;
};

export default function ProductCard(props: ProductCardProps) {
  return (
    <div
      className="lg:w-1/4 md:w-1/2 p-4 w-full"
      id={`product-id-${props.product.id}`}
    >
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://dummyimage.com/421x261"
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          #{props.product.id} CATEGORY
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {props.product.name}
        </h2>
        <p className="mt-1">R$ {props.product.price}</p>
      </div>
    </div>
  );
}
