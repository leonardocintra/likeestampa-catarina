import CardItem from "@/components/custom/card-item";
import { Button } from "@/components/ui/button";
import { getCateories } from "@/data/strapi/entity/categories";

export default async function Home() {
  const categoriesData = await getCateories();

  return (
    <main>
      <div className="flex flex-col text-center p-4">
        {categoriesData.data.map((category: any) => (
          <div key={category.id}>
            <h2>{category.description}</h2>
          </div>
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
