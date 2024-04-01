import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StarIcon from "@/components/custom/icons/start";

export default function ItemDetailRating() {
  return (
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
                Colocar a descrição aqui, colocar a descrição aqui,Colocar a
                descrição aqui, colocar a descrição aqui,Colocar a descrição
                aqui, colocar a descrição aqui,Colocar a descrição aqui, colocar
                a descrição aqui,Colocar a descrição aqui, colocar a descrição
                aqui,Colocar a descrição aqui, colocar a descrição aqui,
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
                Colocar a descrição aqui, colocar a descrição aqui,Colocar a
                descrição aqui, colocar a descrição aqui,Colocar a descrição
                aqui, colocar a descrição aqui,Colocar a descrição aqui, colocar
                a descrição aqui,Colocar a descrição aqui, colocar a descrição
                aqui,Colocar a descrição aqui, colocar a descrição aqui,Colocar
                a descrição aqui, colocar a descrição aqui,Colocar a descrição
                aqui, colocar a descrição aqui,Colocar a descrição aqui, colocar
                a descrição aqui,
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
