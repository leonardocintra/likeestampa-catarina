import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IProduct } from "@/interfaces/IProduct";
import CardItemImages from "./card-item-images";

interface CardItemProps {
  product: IProduct;
}

export default function CardItem({ product }: CardItemProps) {
  return (
    <Card className="w-full max-w-xs">
      <CardItemImages mocks={product.mocks} />
      <div className="text-xs text-center text-slate-500 italic">
        <h4> {"<<"} arraste pros lados {">>"} </h4>
      </div>

      <CardContent className="p-4">
        <div className="grid gap-1.5">
          <h3 className="text-sm font-medium leading-5">{product.name}</h3>

          <Badge>{product.sub_category.description}</Badge>

          <p className="text-sm font-medium">R$ {product.basePrice}</p>
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
