import Image from "next/image";

export default function LogoLikeEstampa() {
  return (
    <Image
      alt="Logo"
      className="rounded-lg"
      height="36"
      src="/logo.png"
      style={{
        aspectRatio: "36/36",
        objectFit: "cover",
      }}
      width="36"
    />
  );
}
