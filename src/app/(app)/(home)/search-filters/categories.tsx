"use client";

import { CategoryDropdown } from "./category-dropdown";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ListFilterIcon } from "lucide-react";
import { CategoriesSideBar } from "./categories_sidebars";
import { CategoriesGetManyOutput } from "@/modules/categories/types";

interface Props {
  data: CategoriesGetManyOutput;
}

export const Categories = ({ data }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const viewAllRef = useRef<HTMLDivElement>(null);

  const [visibleCount, setVisibleCount] = useState(data.length);
  const [isAnyHovered, setIsAnyHoverd] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const activeCategory = "all";
  const activeCategoryIndex = data.findIndex(
    (cat) => cat.slug === activeCategory
  );
  const isActiveCategoryHidden =
    activeCategoryIndex >= visibleCount && activeCategoryIndex !== -1;

  useEffect(() => {
    const calculateVisible = () => {
      if (!containerRef.current || !measureRef.current || !viewAllRef.current)
        return;

      const containerWidth = containerRef.current.offsetWidth;
      const viewAllWidth = viewAllRef.current.offsetWidth;
      const availableWidth = containerWidth - viewAllWidth;

      const items = Array.from(measureRef.current.children);
      let totalWidth = 0;
      let visible  = 0;

      for (const item of items) {
        const width = item.getBoundingClientRect().width;

        if(totalWidth + width > availableWidth) break ;

        totalWidth += width;
        visible++
      }

      setVisibleCount(visible)
    };

    const resizeObserver  = new ResizeObserver(calculateVisible);
    resizeObserver.observe(containerRef.current!);

    return ()=> resizeObserver.disconnect()

  }, [data.length]);

  return (
    <div className="relative w-full">

      {/* Sidebar Place  */}
      <CategoriesSideBar open={isSideBarOpen} onOpenChange={setIsSideBarOpen}/>

      {/* Hidden Eelement for Calculation  */}
      <div ref={measureRef} className="absolute opacity-0 pointer-events-none flex" style={{position : "fixed" , top : -9999, left : -9999}}>
        {data.map((category) => {
          return (
            <div key={category.id}>
              <CategoryDropdown
                category={category}
                isActive={activeCategory === category.slug}
                isNavigationHovered={false}
              />
            </div>
          );
        })}
      </div>

      {/* Visible element  */}
      <div className="flex flex-nowrap items-center gap-1" ref={containerRef} onMouseEnter={()=> setIsAnyHoverd(true)} onMouseLeave={()=> setIsAnyHoverd(false)}>
        {data.slice(0, visibleCount).map((category) => {
          return (
            <div key={category.id}>
              <CategoryDropdown
                category={category}
                isActive={activeCategory === category.slug}
                isNavigationHovered={isAnyHovered}
              />
            </div>
          );
        })}
        <div className="shrink-0" ref=
        {viewAllRef}>
          <Button onClick={()=> setIsSideBarOpen(true)}
          variant={"elevated"}
          className={cn(
            "h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black",
            isActiveCategoryHidden && !isAnyHovered && "bg-white border-primary"
            
          )}
        >View All 
        <ListFilterIcon/></Button>
        </div>
      </div>
    </div>
  );
};
