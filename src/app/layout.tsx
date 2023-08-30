import catarinaGetData from "./api/catarina";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ICategory } from "./interfaces/ICategory";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Like Estampa",
  description: "Meu hobbies destacados",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const categories = await catarinaGetData<ICategory[]>(
  //   "/v1/catalogs/categories"
  // );

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {/* <Header categories={categories} /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
