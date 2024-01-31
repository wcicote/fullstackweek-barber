import { Card, CardContent } from "@/app/_components/ui/card";
import { Button } from "@/app/components/ui/button";
import { MenuIcon, icons } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <Card>
      <CardContent className="px-5 py-8 justify-between items-center flex flex-row">
        <Image
          src={"/Logo-fsw.png"}
          alt={"FSW Barber"}
          height={18}
          width={120}
        ></Image>
        <Button variant={"outline"} size={"icon"} className="h-8 w-8">
          <MenuIcon size={16}></MenuIcon>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
