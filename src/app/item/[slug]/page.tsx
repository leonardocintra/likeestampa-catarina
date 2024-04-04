import { Label } from "@/components/ui/label";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { getProductBySlug } from "@/data/strapi/entity/products";
import { IProduct } from "@/interfaces/IProduct";
import { redirect } from "next/navigation";
import ItemDetailProductImages from "@/components/custom/item/item-detail-product-images";
import StarIcon from "@/components/custom/icons/start";
import ItemDetailRating from "@/components/custom/item/item-detail-rating";
import ItemDetailSizes from "@/components/custom/item/item-detail-sizes";
import ItemDetailColors from "@/components/custom/item/item-detail-colors";

export default async function ItemDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const productData = await getProductBySlug(slug);
  const products: IProduct[] = productData.data;

  if (products.length === 0) {
    console.log(`Não encontrado o produto ${slug}`);
    redirect("/");
  }

  const product: IProduct = products[0];

  return (
    <div
      key="1"
      className="grid gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto mt-5"
    >
      <div className="grid md:grid-cols-2 md:gap-6 items-start">
        <div className="grid gap-4 md:gap-6">
          <h1 className="text-2xl lg:text-4xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-0.5">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
          </div>
          <div>
            <p>100 % Algodão</p>
          </div>

          <div className="flex flex-col gap-2 md:flex-row">
            <form className="grid gap-2 md:gap-4 w-full">
              <ItemDetailColors />

              <ItemDetailSizes />

              <div className="grid gap-2 md:gap-4">
                <Label className="text-base" htmlFor="quantity">
                  Quantidade
                </Label>
                <Select defaultValue="1">
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" size="lg">
                Adicionar carrinho | R$ {product.basePrice}
              </Button>
            </form>
            <Separator className="w-full max-h-[24px] md:hidden" />
            <div className="grid gap-4 text-sm leading-loose" />
          </div>
        </div>

        <ItemDetailProductImages mocks={product.mocks} />
      </div>
      <div className="grid gap-4">
        <Card>
          <CardHeader className="pb-0">
            <CardTitle>Detalhes do produto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <p>{product.description}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Entrega</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <p>
                <strong>Shipping options:</strong>
                We offer standard and express shipping options for most
                destinations. The available shipping methods will be displayed
                at checkout.
              </p>
              <p>
                <strong>Estimated delivery:</strong>
                The estimated delivery time will depend on your location and the
                shipping method chosen. You can view the estimated delivery date
                during the checkout process.
              </p>
              <p>
                <strong>Shipping fees:</strong>
                Colocar a descrição aqui, colocar a descrição aqui,Colocar a
                descrição aqui, colocar a descrição aqui,Colocar a descrição
                aqui, colocar a descrição aqui,Colocar a descrição aqui, colocar
                a descrição aqui,Colocar a descrição aqui, colocar a descrição
                aqui,Colocar a descrição aqui, colocar a descrição aqui,
              </p>
              <p>
                Colocar a descrição aqui, colocar a descrição aqui,Colocar a
                descrição aqui, colocar a descrição aqui,Colocar a descrição
                aqui, colocar a descrição aqui,Colocar a descrição aqui, colocar
                a descrição aqui,Colocar a descrição aqui, colocar a descrição
                aqui,Colocar a descrição aqui, colocar a descrição aqui,
              </p>
            </div>
          </CardContent>
        </Card>

        <ItemDetailRating />
      </div>
    </div>
  );
}
