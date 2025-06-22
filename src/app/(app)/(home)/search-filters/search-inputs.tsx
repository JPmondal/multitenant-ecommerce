import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Props {
  disabled?: boolean;
}

export const SearchInputs = ({ disabled }: Props) => {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 size-4" />
        <Input className="pl-8" placeholder="Search Products" disabled={disabled}/>
      </div>
      {/* Todo : Add categories view all buttons */}
      {/* Todo : Add library butto */}
      
    </div>
  );
};
