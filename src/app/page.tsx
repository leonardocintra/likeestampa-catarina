import CardItem from "@/components/custom/card-item";
import { Button } from "@/components/ui/button";
import { getProductTypes } from "@/data/strapi/entity/product-type";
import { getProducts } from "@/data/strapi/entity/products";
import { IProduct } from "@/interfaces/IProduct";
import { IProductType } from "@/interfaces/IProductType";

export default async function Home() {
  const productTypesFetched = await getProductTypes();
  const productsFetched = await getProducts();

  const productTypes: IProductType[] = productTypesFetched.data;
  const products: IProduct[] = productsFetched.data;

  console.log(productsFetched.data)

  return (
    <main>
      <div className="flex justify-center space-x-2 my-3">
        {productTypes
          .filter((type: IProductType) => type.active === true)
          .map((type: IProductType) => (
            <Button size={"sm"} key={type.slug}>
              {type.description}
            </Button>
          ))}
      </div>

      <div className="container grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {products.map((product: IProduct) => (
          <CardItem key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
