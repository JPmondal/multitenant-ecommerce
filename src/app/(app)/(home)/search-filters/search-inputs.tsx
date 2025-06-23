"use client"

import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CustomCategory } from "../types";
import { CategoriesSideBar } from "./categories_sidebars";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ListFilterIcon } from "lucide-react";

interface Props {
  disabled?: boolean;
  data : CustomCategory[]
}

export const SearchInputs = ({ disabled,data }: Props) => {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  return (
    <div className="flex items-center gap-2 w-full">
      <CategoriesSideBar data={data} open={isSideBarOpen} onOpenChange={setIsSideBarOpen}/>
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 size-4" />
        <Input className="pl-8" placeholder="Search Products" disabled={disabled}/>
      </div>
      {/* Todo : Add categories view all buttons */}
      <Button onClick={() => setIsSideBarOpen(true)} variant={"elevated"} className="size-12 shrink-0 flex lg:hidden ">
        <ListFilterIcon />
      </Button>
      {/* Todo : Add library butto */}
      
    </div>
  );
};
