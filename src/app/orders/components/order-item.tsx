"use client";
import { format } from "date-fns";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Prisma } from "@prisma/client";
import { Separator } from "@/components/ui/separator";
import OrderProductItem from "./order-product-item";
import { useMemo } from "react";
import computeProductTotalPrice from "@/helpers/product";

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: {
          product: true;
        };
      };
    };
  }>;
}

const OrderItem = ({ order }: OrderItemProps) => {
  const subtotal = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return (
        acc + Number(orderProduct.product.basePrice) * orderProduct.quantity
      );
    }, 0);
  }, [order.orderProducts]);

  const total = useMemo(() => {
    return order.orderProducts.reduce((acc, product) => {
      const productTotalPrice = computeProductTotalPrice(product.product);

      return acc + productTotalPrice.totalPrice * product.quantity;
    }, 0);
  }, [order.orderProducts]);

  const totalDiscounts = subtotal - total;
  return (
    <Card className="px-5">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger>
            <div className="flex flex-col gap-1 text-left">
              <p className="text-sm font-bold uppercase lg:text-base">
                Pedido com {order.orderProducts.length} produto(s)
              </p>
              <span className="text-xs opacity-60">
                Feito em {format(order.createdAt, "d/MM/y 'às' HH:mm")}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col font-bold">
                  <p>Status</p>
                  {order.status === "WAITING_FOR_PAYMENT" ? (
                    <p className="text-red-500">Não Finalizado</p>
                  ) : (
                    <p className="text-sky-500">Pago</p>
                  )}
                </div>

                <div>
                  <p className="font-bold">Data</p>
                  <p className="opacity-60">
                    {format(order.createdAt, "dd/mm/yy")}
                  </p>
                </div>

                <div>
                  <p className="font-bold">Retirada</p>
                  <p className="opacity-60">Salvador (BA)</p>
                </div>
              </div>
            </div>
            <Separator />
            <div className="flex flex-col py-3">
              {order.orderProducts.map((orderProduct) => (
                <OrderProductItem
                  key={orderProduct.id}
                  orderProduct={orderProduct}
                />
              ))}
            </div>
            <div className="flex w-full flex-col gap-1 text-xs">
              <Separator />

              <div className="flex w-full justify-between py-3 lg:text-sm">
                <p>Subtotal</p>
                <p>R$ {subtotal.toFixed(2)}</p>
              </div>

              <Separator />

              <div className="flex w-full justify-between py-3 lg:text-sm">
                <p>Entrega</p>
                <p>GRÁTIS</p>
              </div>

              <Separator />

              <div className="flex w-full justify-between py-3 lg:text-sm">
                <p>Descontos</p>
                <p>-R$ {totalDiscounts.toFixed(2)}</p>
              </div>

              <Separator />

              <div className="flex w-full justify-between py-3 text-sm font-bold lg:text-base">
                <p>Total</p>
                <p>R$ {total.toFixed(2)}</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default OrderItem;
