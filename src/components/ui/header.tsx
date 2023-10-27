import { MenuIcon, ShoppingCartIcon } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Button size={"icon"} variant={"outline"}>
        <MenuIcon />
      </Button>

      <Image alt="DUTTY FREE" src={"./logo-dfa.svg"} width={120} height={120} />

      <Button size={"icon"} variant={"outline"}>
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
