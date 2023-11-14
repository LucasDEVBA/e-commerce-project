import computeProductTotalPrice from "@/helpers/product";
import { OrderProduct, Prisma } from "@prisma/client";
import Image from "next/image";

interface OrderProductItemProps {
  orderProduct: Prisma.OrderProductGetPayload<{
    include: { product: true };
  }>;
}

const OrderProductItem = ({ orderProduct }: OrderProductItemProps) => {
  const productWithTotalPrice = computeProductTotalPrice(orderProduct.product);

  return (
    <div className="flex items-center gap-4">
      <div className="flex h-[80px] w-[100px] items-center justify-center gap-4 rounded-lg bg-accent">
        <Image
          src={orderProduct.product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain"
          alt={orderProduct.product.name}
        />
      </div>

      <div className="flex w-full flex-col gap-1 py-2">
        <div className="flex w-fit justify-center rounded-md bg-accent px-3 py-1">
          <p className="text-[10px]">Retirada em Salvador</p>
        </div>

        <p className="text-xs">{orderProduct.product.name}</p>

        <div className="flex w-full items-center justify-between gap-1">
          <div className="flex items-center gap-1">
            <p className="text-sm font-bold">
              R$ {productWithTotalPrice.totalPrice.toFixed(2)}
            </p>

            {productWithTotalPrice.discountPercentage > 0 && (
              <div className="text-xs line-through opacity-60">
                R$
                {Number(productWithTotalPrice.basePrice).toFixed(2)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProductItem;
