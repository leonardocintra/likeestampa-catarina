import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ItemDetailSizes() {
  return (
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
  );
}
