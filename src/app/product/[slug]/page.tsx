import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductDetails from "./components/product-details";
import computeProductTotalPrice from "@/helpers/product";

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
  });
  if (!product) return null;
  return (
    <div className="flex flex-col gap-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductDetails product={computeProductTotalPrice(product)} />
    </div>
  );
};

export default ProductDetailsPage;
