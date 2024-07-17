import { FolderPlus, List, Search, UserRoundPlus } from "lucide-react"

export const Social = () => {
    return (
        <div className="flex text-[#c8aa6e] justify-between p-2 text-[0.875rem]">
            <span className="text-[#a09b8c] font-bold tracking-[1px]">SOCIAL</span>
            <div className="flex items-center justify-between w-[50%]">
                <button className="hover:text-[#f0e6d2]"><UserRoundPlus className="h-[19px] w-[19px] " /></button>
                <button className="hover:text-[#f0e6d2]"><FolderPlus className="h-[19px] w-[19px]" /></button>
                <button className="hover:text-[#f0e6d2]"><List className="h-[19px] w-[19px] stroke-[3px]" /></button>
                <button className="hover:text-[#f0e6d2]"><Search className="h-[19px] w-[19px] stroke-[3px]" /></button>
            </div>
        </div>
    )
}