/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ukiDHdCqYUP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
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

export default function Component() {
  return (
    <div
      key="1"
      className="grid gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto mt-5"
    >
      <div className="grid md:grid-cols-2 md:gap-6 items-start">
        <div className="grid gap-4 md:gap-6">
          <h1 className="text-2xl lg:text-4xl font-bold">Nome produto</h1>
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
            <p>100% Algodão e mais alguma coisa para colocar aqui</p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row">
            <form className="grid gap-2 md:gap-4 w-full">
              <div className="grid gap-2">
                <Label className="text-base" htmlFor="color">
                  Cor
                </Label>
                <RadioGroup
                  className="flex items-center gap-2"
                  defaultValue="black"
                  id="color"
                >
                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                    htmlFor="color-black"
                  >
                    <RadioGroupItem id="color-black" value="black" />
                    Preto
                  </Label>
                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                    htmlFor="color-white"
                  >
                    <RadioGroupItem id="color-white" value="white" />
                    Branco
                  </Label>
                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                    htmlFor="color-blue"
                  >
                    <RadioGroupItem id="color-blue" value="blue" />
                    Azul
                  </Label>
                </RadioGroup>
              </div>
              <div className="grid gap-2">
                <Label className="text-base" htmlFor="size">
                  Tamanho
                </Label>
                <RadioGroup
                  className="flex items-center gap-2"
                  defaultValue="m"
                  id="size"
                >
                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                    htmlFor="size-xs"
                  >
                    <RadioGroupItem id="size-xs" value="xs" />P
                  </Label>
                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                    htmlFor="size-s"
                  >
                    <RadioGroupItem id="size-s" value="s" />M
                  </Label>
                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                    htmlFor="size-m"
                  >
                    <RadioGroupItem id="size-m" value="m" />G
                  </Label>
                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                    htmlFor="size-l"
                  >
                    <RadioGroupItem id="size-l" value="l" />
                    GG
                  </Label>
                  <Label
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                    htmlFor="size-xl"
                  >
                    <RadioGroupItem id="size-xl" value="xl" />
                    XGG
                  </Label>
                </RadioGroup>
              </div>
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
                Adicionar carrinho
              </Button>
            </form>
            <Separator className="w-full max-h-[24px] md:hidden" />
            <div className="grid gap-4 text-sm leading-loose" />
          </div>
        </div>
        <div className="grid gap-4 md:gap-6">
          <img
            alt="Product Image"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            height={600}
            src="/placeholder.svg"
            width={600}
          />
          <div className="hidden md:flex gap-4 items-start">
            <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
              <img
                alt="Preview thumbnail"
                className="aspect-square object-cover"
                height={100}
                src="/placeholder.svg"
                width={100}
              />
              <span className="sr-only">View Image 1</span>
            </button>
            <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
              <img
                alt="Preview thumbnail"
                className="aspect-square object-cover"
                height={100}
                src="/placeholder.svg"
                width={100}
              />
              <span className="sr-only">View Image 2</span>
            </button>
            <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
              <img
                alt="Preview thumbnail"
                className="aspect-square object-cover"
                height={100}
                src="/placeholder.svg"
                width={100}
              />
              <span className="sr-only">View Image 3</span>
            </button>
            <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
              <img
                alt="Preview thumbnail"
                className="aspect-square object-cover"
                height={100}
                src="/placeholder.svg"
                width={100}
              />
              <span className="sr-only">View Image 4</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <Card>
          <CardHeader className="pb-0">
            <CardTitle>Detalhes do produto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <p>
                The Acme Prism T-Shirt is designed to meet the highest standards
                of quality and style. The fabric is carefully selected to
                provide a comfortable and flattering fit, making it suitable for
                all-day wear.
              </p>
              <p>
                The shirt's unique prism pattern is created using advanced
                printing techniques, ensuring that the design is vibrant and
                long-lasting. Whether you're dressing up for a casual day out or
                adding a pop of color to your wardrobe, the Acme Prism T-Shirt
                is the perfect choice.
              </p>
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
                Shipping fees are calculated based on the weight of the items in
                your order and the shipping method chosen. You can view the
                shipping fees during the checkout process before making a
                payment.
              </p>
              <p>
                If you have any questions about shipping or need assistance with
                tracking your order, please contact our customer service team,
                and we'll be happy to help.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Avaliações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <div className="grid gap-1">
                  <h3 className="text-sm font-medium">Great fit and style</h3>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground dark:text-muted-background">
                    Posted 2 days ago
                  </p>
                </div>
                <div className="grid gap-2 text-sm leading-loose">
                  <p>
                    I love the design of this shirt. The prism pattern is really
                    eye-catching and adds a unique touch to my outfit. The fit
                    is perfect, and the fabric is soft and comfortable to wear
                    all day. I've been getting compliments on this shirt, and
                    I'm really happy with my purchase.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid gap-1">
                  <h3 className="text-sm font-medium">
                    Disappointed with the quality
                  </h3>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground dark:text-muted-background">
                    Posted 5 days ago
                  </p>
                </div>
                <div className="grid gap-2 text-sm leading-loose">
                  <p>
                    I was excited to receive this shirt, but I was disappointed
                    with the quality. The fabric feels cheap, and the printing
                    of the design looks faded and pixelated. It doesn't look as
                    vibrant as the images online. I also found that the shirt
                    runs small, and the fit was not flattering. Overall, I
                    wouldn't recommend this shirt based on my experience.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
