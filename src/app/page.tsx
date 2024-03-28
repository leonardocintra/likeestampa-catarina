import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col max-w-lg mx-auto space-y-4">
        <h2 className="text-center text-3xl">Like Estampa</h2>
        <p className="font-mono text-lg text-center bg-green-200 p-2 rounded-lg hover:bg-green-400 transition-colors">Estamos reconstruindo a pagina</p>
        <Button>Like estampa - Easy Panel</Button>
      </div>
    </main>
  );
}
