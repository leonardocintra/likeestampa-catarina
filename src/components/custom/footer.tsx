/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pBTEt357dY9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6">
      <div className="container flex flex-col items-center gap-4 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <img
            alt="Logo"
            className="rounded-lg"
            height="36"
            src="/placeholder.svg"
            style={{
              aspectRatio: "36/36",
              objectFit: "cover",
            }}
            width="36"
          />
          <div className="grid gap-1 text-sm">
            <p className="font-semibold">Like Estampa</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Suas paixões estampadas
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 flex-1 min-[300px]:justify-end text-center flex-col sm:flex-row">
          <Link
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Contato
          </Link>
          <Link
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Sobre nos
          </Link>
          <Link
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Termos & Condições
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4 text-xs">
          <span className="text-gray-500 dark:text-gray-400">
            © 2021 - {new Date().getFullYear()} Like Estampa
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            Made with love by @leonardoncintra
          </span>
        </div>
      </div>
    </footer>
  );
}
