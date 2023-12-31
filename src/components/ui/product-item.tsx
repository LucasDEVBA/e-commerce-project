import Image from "next/image";

import { ProductWithTotalPrice } from "@/helpers/product";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProductItemProps {
  product: ProductWithTotalPrice;
  className?: string;
}

const ProductItem = ({ product, className }: ProductItemProps) => {
  return (
    <Link
      href={`/product/${product.slug}`}
      className={cn("flex min-w-[156px] flex-col gap-4", className)}
    >
      <div className="relative flex aspect-square w-full items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          alt={product.name}
        />

        {product.discountPercentage > 0 && (
          <Badge className="absolute left-4 top-2 px-2 py-[2px]">
            <ArrowDownIcon size={14} /> {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>
      </div>
      <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap text-sm">
        {product.discountPercentage > 0 ? (
          <>
            <p className="font-semibold">R$ {product.totalPrice.toFixed(2)}</p>
            <p className="text-xs line-through opacity-75">
              R$ {Number(product.basePrice).toFixed(2)}
            </p>
          </>
        ) : (
          <p className="text-sm font-bold">R$ {product.basePrice.toFixed(2)}</p>
        )}
      </div>
    </Link>
  );
};

export default ProductItem;
