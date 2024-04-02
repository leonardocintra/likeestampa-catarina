import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ItemDetailColors() {
  return (
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
  );
}
