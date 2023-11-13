"use client";

import {
  MenuIcon,
  ShoppingCartIcon,
  LogInIcon,
  PercentIcon,
  ListOrderedIcon,
  HomeIcon,
  LogOutIcon,
} from "lucide-react";
import Image from "next/image";
import { signIn, useSession, signOut } from "next-auth/react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Link from "next/link";
import Cart from "./cart";

const Header = () => {
  const { status, data } = useSession();
  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogOutClick = async () => {
    await signOut();
  };

  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"} variant={"outline"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>
          {status === "authenticated" && data?.user && (
            <div className="flex flex-col">
              <div className="flex items-center gap-2 py-2">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>
                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>
                <p className="font-medium">{data.user.name}</p>
              </div>

              <Separator />
            </div>
          )}

          <div className="mt-4 space-y-4">
            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                variant={"outline"}
                className="w-full justify-start gap-2"
              >
                <LogInIcon size={16} />
                Fazer login
              </Button>
            )}
            {status === "authenticated" && (
              <Button
                onClick={handleLogOutClick}
                variant={"outline"}
                className="w-full justify-start gap-2"
              >
                <LogOutIcon size={16} />
                Fazer logout
              </Button>
            )}
            <Link href={"/"}>
              <Button
                variant={"outline"}
                className="mt-4 w-full justify-start gap-2"
              >
                <HomeIcon size={16} />
                Início
              </Button>
            </Link>{" "}
            <Button variant={"outline"} className="w-full justify-start gap-2">
              <PercentIcon size={16} />
              Ofertas
            </Button>
            <Button variant={"outline"} className="w-full justify-start gap-2">
              <ListOrderedIcon size={16} />
              Catálogo
            </Button>
            <Link href={"/category/beautyFragrances"}>
              <Button
                variant={"outline"}
                className="mt-4 w-full justify-start gap-2"
              >
                Beleza e Fragrâncias
              </Button>
            </Link>
            <Link href={"/category/electronics"}>
              <Button
                variant={"outline"}
                className="mt-4 w-full justify-start gap-2"
              >
                Eletrônicos
              </Button>
            </Link>
            <Link href={"/category/wine"}>
              <Button
                variant={"outline"}
                className="mt-4 w-full justify-start gap-2"
              >
                Bebidas
              </Button>
            </Link>
            <Link href={"/category/luxury"}>
              <Button
                variant={"outline"}
                className="mt-4 w-full justify-start gap-2"
              >
                Luxo
              </Button>
            </Link>
            <Link href={"/category/edibles"}>
              <Button
                variant={"outline"}
                className="mt-4 w-full justify-start gap-2"
              >
                Comestíveis
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      <Link href={"/"}>
        <Image
          alt="DUTTY FREE"
          src={"/logo-dfa.svg"}
          width={120}
          height={120}
        />
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"} variant={"outline"}>
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <Cart />
        </SheetContent>
      </Sheet>
    </Card>
  );
};

export default Header;
