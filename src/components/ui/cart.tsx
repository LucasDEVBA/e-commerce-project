import { ShoppingCartIcon } from "lucide-react";

import { Badge } from "./badge";
import { useContext } from "react";
import { cartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import computeProductTotalPrice from "@/helpers/product";

const Cart = () => {
  const { products } = useContext(cartContext);
  return (
    <div className="flex flex-col gap-8">
      <Badge variant="heading">
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>
      <div className="flex flex-col gap-5">
        {products.map((product) => (
          <CartItem
            product={computeProductTotalPrice(product as any) as any}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
