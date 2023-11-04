import Image from "next/image";
import ProductList from "./components/product-list";
import { prismaClient } from "@/lib/prisma";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gte: 0,
      },
    },
  });
  return (
    <div>
      <Image
        src={"/Top-Banner01.png"}
        width={0}
        height={0}
        className="h-auto w-full p-5"
        sizes="100vw"
        alt="Banner Inicial"
      />
      <div className="mt-8">
        <p className="mb-3 pl-5 font-bold uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>
      <Image
        src={"/Medium-banner02.png"}
        width={0}
        height={0}
        className="h-auto w-full py-5"
        sizes="100vw"
        alt="Como comprar conosco"
      />
    </div>
  );
}
