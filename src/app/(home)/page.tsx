import ProductList from "../../components/ui/product-list";
import { prismaClient } from "@/lib/prisma";
import SectionTitle from "../../components/ui/section-title";
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
    <div className="mx-auto flex flex-col gap-8 py-8 lg:container lg:gap-10">
      <div className="mx-auto max-w-[1920px]">
        <PromoBanner
          src={"/Top-Banner01.png"}
          className="hidden h-auto w-full lg:block"
          alt="Banner Inicial"
        />
      </div>
      <div className="mt-8 flex flex-col gap-3 lg:gap-5">
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
        className="h-auto w-full px-4 py-5"
        alt="Banner 05"
      />

      <div className="mt-8">
        <SectionTitle>Eletrônicos</SectionTitle>
        <ProductList products={eletronics} />
      </div>

      <PromoBanner
        src={"/banner06.png"}
        className="h-auto w-full pt-5"
        alt="Banner 06"
      />

      <PromoBanner src={"/banner07.png"} alt="Banner 07" />
    </div>
  );
}
