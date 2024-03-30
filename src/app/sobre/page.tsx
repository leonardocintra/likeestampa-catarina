/**
 * v0 by Vercel.
 * @see https://v0.dev/t/n9SfJ4XTBkH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <div className="py-10 md:py-16">
        <div className="container grid md:gap-8 lg:grid-cols-3 lg:gap-12 xl:grid-cols-4">
          <div className="space-y-4 lg:col-span-2 lg:space-y-6 xl:space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Quem somos
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
                Somos uma equipa apaixonada que se dedica a fornecer as
                camisetas estampadas mais elegantes e confortáveis para todas as
                ocasiões.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">Our Mission</h2>
              <p className="max-w-prose text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
                Espalhar alegria e confiança e claro a paixão de cada um através
                das nossas camisetas de alta qualidade, modernas e acessíveis,
                fazendo de cada dia uma afirmação de moda.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Nossos valores
              </h2>
              <ul className="list-disc list-inside">
                <li>Qualidade</li>
                <li>Estilo</li>
                <li>Conforto</li>
                <li>Acessibilidade</li>
              </ul>
            </div>
          </div>
          <div className="grid items-start gap-6 lg:items-center xl:gap-10">
            <div className="mx-auto rounded-lg overflow-hidden aspect-video">
              <Image
                alt="Video"
                className="object-cover"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12 lg:py-16 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100">
              Nosso time
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Um casal de entusiastas que trabalha arduamente para lhe oferecer
              as melhores camisetas com seus designs favoritos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 items-stretch justify-center gap-6 md:gap-10 lg:gap-12">
            <div className="flex flex-col gap-2">
              <img
                alt="Portrait"
                className="mx-auto rounded-full overflow-hidden aspect-[1/1] object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="200"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold tracking-tight">
                  Leonardo Cintra
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Desenvolvedor Software
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <img
                alt="Portrait"
                className="mx-auto rounded-full overflow-hidden aspect-[1/1] object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="200"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold tracking-tight">
                  Juliana Cintra
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Designer e Redes Sociais
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 lg:py-16">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              O que dizem nossos clientes
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 items-stretch justify-center max-w-6xl mx-auto gap-6 md:gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                “Adoro a variedade de estampas disponíveis. As camisetas são
                super macias e o corte é perfeito!”
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <img
                    alt="Portrait"
                    className="rounded-full overflow-hidden aspect-[1/1] object-cover object-center"
                    height="40"
                    src="/placeholder.svg"
                    width="40"
                  />
                  <div className="flex flex-col">
                    <strong className="font-semibold">Leandro Ribeiro</strong>
                    <time className="text-xs" dateTime="2023-08-19">
                      25 de Fevereiro, 2022
                    </time>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                “As estampas são fantásticas! Camistas tão confortáveis e com
                estilo. Recebo elogios sempre que as uso. 10/10 recomendo!”
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <img
                    alt="Portrait"
                    className="rounded-full overflow-hidden aspect-[1/1] object-cover object-center"
                    height="40"
                    src="/placeholder.svg"
                    width="40"
                  />
                  <div className="flex flex-col">
                    <strong className="font-semibold">Emanuel Carvalho</strong>
                    <time className="text-xs" dateTime="2023-08-19">
                      12 de Abril, 2023
                    </time>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                “A qualidade do tecido é excelente. 100% Algodão. As camisetas
                lavam-se bem e as cores não se desvanecem. Com certeza que vou
                comprar mais!”
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <img
                    alt="Portrait"
                    className="rounded-full overflow-hidden aspect-[1/1] object-cover object-center"
                    height="40"
                    src="/placeholder.svg"
                    width="40"
                  />
                  <div className="flex flex-col">
                    <strong className="font-semibold">Sophia Nascimento</strong>
                    <time className="text-xs" dateTime="2023-08-19">
                      19 Agosto, 2023
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
