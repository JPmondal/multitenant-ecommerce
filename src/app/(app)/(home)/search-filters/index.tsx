import { SearchInputs } from "./search-inputs"
import { Categories } from "./categories"
import { CustomCategory } from "../types"

interface Props {
    data : CustomCategory[]
}

export const SearchFilters = ({data}:Props)=>{
    return (
        <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
            <SearchInputs data={data}/>
            <div className="lg:block hidden">
                <Categories  data={data}/>
            </div>
        </div>
    )
}