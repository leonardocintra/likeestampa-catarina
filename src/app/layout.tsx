import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Like Estampa",
  description: "Suas paixões estampadas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
