import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IProduct } from "@/interfaces/IProduct";
import CardItemImages from "./card-item-images";
import Link from "next/link";

interface CardItemProps {
  product: IProduct;
}

export default function CardItem({ product }: CardItemProps) {
  return (
    <Card className="w-full max-w-xs">
      <CardItemImages mocks={product.mocks} />
      <div className="text-xs text-center text-slate-500 italic">
        <h4>
          {" "}
          {"<<"} arraste pros lados {">>"}{" "}
        </h4>
      </div>

      <CardContent className="p-4">
        <div className="grid gap-1.5 text-center">
          <h3 className="text-2xl text-slate-700 font-medium leading-5">
            {product.name}
          </h3>

          <Badge className="justify-center">
            {product.sub_category.description}
          </Badge>

          <p className="text-sm font-medium text-slate-700">
            R$ {product.basePrice}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center space-x-2">
        <Link href={`/item/${product.slug}`}>
          <Button className="border border-red-700" variant="ghost">
            Detalhes
          </Button>
        </Link>
        <Button className="border" variant="destructive">
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
}
