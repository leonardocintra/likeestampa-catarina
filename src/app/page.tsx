import catarinaGetData from "./api/catarina";
import ProductCard from "./components/catalog/ProductCard";
import { IProduct } from "./interfaces/IProduct";

export default async function Home() {
  const products = await catarinaGetData<IProduct[]>("/v1/catalogs/products");

  return (
    <main>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products ? (
              products.map((product: IProduct) => (
                <ProductCard
                  key={`product-id-key-${product.id}`}
                  product={product}
                />
              ))
            ) : (
              <h1>Carregando produtos ... </h1>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
