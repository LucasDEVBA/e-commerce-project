import { Badge } from "@/components/ui/badge";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import OrderItem from "./components/order-item";

export const dynamic = "force-dynamic";

const OrderPage = async () => {
  const user = getServerSession(authOptions);

  if (!user) {
    return;
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: (user as any).id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });
  return (
    <div className="mx-auto flex flex-col gap-8 p-5 lg:container lg:gap-10 lg:py-10">
      <Badge variant="heading">
        <PackageSearchIcon size={16} />
        Meus Pedidos
      </Badge>
      <div className="mt-5 flex flex-col gap-5">
        {orders.map((order) => (
          <OrderItem order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
