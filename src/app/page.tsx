import { Button } from "@/components/ui/button";
import { getCateories } from "@/data/strapi/categories";

export default async function Home() {
  const categoriesData = await getCateories();

  return (
    <main>
      <div className="flex flex-col max-w-lg mx-auto space-y-4">
        <h2 className="text-center text-3xl">Like Estampa</h2>
        <p className="font-mono text-lg text-center bg-green-200 p-2 rounded-lg hover:bg-green-400 transition-colors">
          Estamos reconstruindo a pagina
        </p>
        <Button>Like estampa - Easy Panel</Button>

        <div className="border flex flex-col text-center p-4">
          {categoriesData.data.map((category: any) => (
            <div key={category.id}>
              <h2>{category.description}</h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
