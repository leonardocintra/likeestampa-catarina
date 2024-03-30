import Link from "next/link";
import LogoLikeEstampa from "./logo";

export default function Header() {
  return (
    <div className="flex h-14 items-center px-4 border-b">
      <Link href={"/"}>
        <div className="flex items-center gap-1">
          <LogoLikeEstampa />
          <span className="text-lg font-bold">Like Estampa</span>
        </div>
      </Link>
      
      <nav className="ml-auto flex items-center gap-6 text-sm font-medium">
        <Link
          className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="/"
        >
          <HomeIcon className="w-4 h-4" />
          Home
        </Link>
        <Link
          className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          <ShoppingBagIcon className="w-4 h-4" />
          Carrinho
        </Link>
      </nav>
    </div>
  );
}

function HomeIcon(props: any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ShoppingBagIcon(props: any) {
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
