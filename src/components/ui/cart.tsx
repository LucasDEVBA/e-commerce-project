import { ShoppingCartIcon } from "lucide-react";

import { Badge } from "./badge";
import { useContext } from "react";
import { cartContext } from "@/providers/cart";

const Cart = () => {
  const { products } = useContext(cartContext);
  return (
    <div>
      <Badge variant="heading">
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>
      {products.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  );
};

export default Cart;
