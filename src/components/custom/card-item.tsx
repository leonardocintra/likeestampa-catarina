/**
 * v0 by Vercel.
 * @see https://v0.dev/t/353CJQXWft9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CardItem() {
  return (
    <Card className="w-full max-w-xs">
      <div className="aspect-w-4 aspect-h-5 overflow-hidden rounded-lg">
        <Image
          alt="T-shirt"
          className="object-center object-cover"
          height={500}
          src="/placeholder.svg"
          style={{
            aspectRatio: "400/500",
            objectFit: "cover",
          }}
          width={400}
        />
      </div>
      <CardContent className="p-4">
        <div className="grid gap-1.5">
          <h3 className="text-sm font-medium leading-5">
            Classic White T-shirt
          </h3>
          <p className="text-sm text-gray-500">100% Algodão</p>
          <p className="text-sm font-medium">R$ 20.00</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center p-4">
        <Button className="w-full" variant="default">
          Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  );
}
