import Image from "next/image";
import ProductList from "./components/product-list";
import { prismaClient } from "@/lib/prisma";
import SectionTitle from "./components/section-title";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gte: 0,
      },
    },
  });

  const beauty = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "beautyFragrances",
      },
    },
  });

  const eletronics = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "electronics",
      },
    },
  });
  return (
    <div>
      <PromoBanner
        src={"/Top-Banner01.png"}
        className="h-auto w-full p-5"
        alt="Banner Inicial"
      />
      <div className="mt-8">
        <SectionTitle>Ofertas</SectionTitle>

        <ProductList products={deals} />
      </div>
      <PromoBanner
        src={"/Medium-banner02.png"}
        className="h-auto w-full py-5"
        alt="Como comprar conosco"
      />
      <div className="grid grid-cols-2 gap-3 px-4">
        <PromoBanner
          src={"/banner03.png"}
          className="h-auto w-full py-5"
          alt="Como comprar conosco"
        />

        <PromoBanner
          src={"/banner04.png"}
          className="h-auto w-full py-5"
          alt="Como comprar conosco"
        />
      </div>
      <div className="mt-8">
        <SectionTitle>Beleza e Cosméticos</SectionTitle>
        <ProductList products={beauty} />
      </div>

      <PromoBanner
        src={"/banner05.png"}
        className="h-auto w-full p-5"
        alt="Banner 05"
      />

      <div className="mt-8">
        <SectionTitle>Eletrônicos</SectionTitle>
        <ProductList products={eletronics} />
      </div>

      <PromoBanner
        src={"/banner06.png"}
        className="h-auto w-full py-5"
        alt="Banner 06"
      />

      <PromoBanner src={"/banner07.png"} alt="Banner 07" />
    </div>
  );
}
