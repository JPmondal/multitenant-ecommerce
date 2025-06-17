import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import Link from "next/link";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSideBar = ({ items, open, onOpenChange }: Props) => {

    
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <div>
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-3">
            {
                items.map((item)=>(
                    <Link onClick={()=> onOpenChange(false)} className="w-full flex font-medium items-center text-base hover:bg-black hover:text-white p-4 text-left" key={item.href} href={item.href}>{item.children}</Link>
                ))
            }
            <div className="border-t"> 
                <Link className="w-full flex font-medium items-center text-base hover:bg-black hover:text-white p-4 text-left" href={'/sign-in'}>Log in</Link>
                <Link className="w-full flex font-medium items-center text-base hover:bg-black hover:text-white p-4 text-left" href={'/sign-up'}>Start Selling</Link>
            </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
