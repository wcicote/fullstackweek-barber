"use client";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  MenuIcon
} from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";



import SideMenu from "./side-menu";

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

        <Sheet>
          <SheetTrigger>
            <Button variant={"outline"} size={"icon"} className="h-8 w-8">
              <MenuIcon size={16}></MenuIcon>
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
