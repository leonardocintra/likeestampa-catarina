import getData from "./api/catarina";
import ProductCard from "./components/catalog/ProductCard";
import { IProduct } from "./interfaces/IProduct";

export default async function Home() {
  const products = await getData<IProduct[]>("/v1/catalogs/products");

  return (
    <main>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products ? (
              products.map((product: any) => <ProductCard product={product} />)
            ) : (
              <h1>Carregando produto</h1>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
