import CardItem from "@/components/custom/card-item";
import { Button } from "@/components/ui/button";
import { getProductTypes } from "@/data/strapi/entity/product-type";
import { IProductType } from "@/interfaces/IProductType";

export default async function Home() {
  const productTypes = await getProductTypes();

  return (
    <main>
      <div className="flex justify-center space-x-2 my-3">
        {productTypes.data
          .filter((t: IProductType) => t.active === true)
          .map((type: IProductType) => (
            <Button size={"sm"} key={type.id}>
              {type.description}
            </Button>
          ))}
      </div>

      <div className="container grid sm:grid-cols-4 gap-2">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </main>
  );
}
