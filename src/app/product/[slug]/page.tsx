import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductDetails from "./components/product-details";
import computeProductTotalPrice from "@/helpers/product";
import ProductList from "@/components/ui/product-list";
import SectionTitle from "@/components/ui/section-title";

interface ProductDetailsPage {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({ params: { slug } }: ProductDetailsPage) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8 pb-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductDetails product={computeProductTotalPrice(product)} />
      <div>
        <SectionTitle>PRODUTOS RECOMENDADOS</SectionTitle>
        <ProductList key={product.id} products={product.category.products} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
