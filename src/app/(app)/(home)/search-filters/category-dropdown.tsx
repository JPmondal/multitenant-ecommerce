"use client";

import { Button } from "@/components/ui/button";
import { Category } from "@/payload-types";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useDropdownPosition } from "./use-dropdown-position";
import { SubcategoryMenu } from "./subcategory-menu";

interface Props {
  category: Category;
  isActive?: boolean;
  isNavigationHovered?: boolean;
}

export const CategoryDropdown = ({
  category,
  isActive,
  isNavigationHovered,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {getDropdownPosition} = useDropdownPosition(dropdownRef)

  const dropdownPosition = getDropdownPosition()

  const onMouseEnter = () => {
    if (category.subCategories) {
      setIsOpen(true);
    }
  };

  const onMouseLeave = () => {
    setIsOpen(false);
  };


  return (

    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative">
        <Button
          variant={"elevated"}
          className={cn(
            "h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black",
            isActive && !isNavigationHovered && "bg-white border-primary"
          )}
        >
          {category.name}
        </Button>
        {category.subCategories && category.subCategories.length > 0 && (
          <div
            className={cn(
              "w-0 h-0 -bottom-3 opacity-0 border-b-[10px] border-l-[10px] border-r-[10px] border-l-transparent border-r-transparent border-b-black absolute left-1/2 -translate-x-1/2 ",
              isOpen && "opacity-100"
            )}
          ></div> 
        )}
      </div>
      <SubcategoryMenu category={category} isOpen={isOpen} position={dropdownPosition}/>
    </div>
  );
};
