import { SpoilsLeft } from "@/components/spoils/spoils-left";
import { SpoilsRight } from "@/components/spoils/spoils-right";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default function SpoilsPage() {
    return (
        <div className="flex h-full w-full justify-between pt-[20px] pb-[20px]">
            <div className="absolute inset-0 h-full w-full bg-[#030e1d]"></div>

            <div className="flex flex-col justify-between relative h-full w-[75px]">
                <div className="flex flex-col gap-[11.5px]">
                    <Link className="flex text-[#cdbe91]  py-[7px] cursor-pointer items-center justify-center" href={"#"}><CirclePlus size={27} /></Link>
                    <Link className="flex text-[#cdbe91]  py-[7px] cursor-pointer items-center justify-center" href={"#"}><CirclePlus size={27} /></Link>
                    <Link className="flex text-[#cdbe91]  py-[7px] cursor-pointer items-center justify-center" href={"#"}><CirclePlus size={27} /></Link>
                    <Link className="flex text-[#cdbe91]  py-[7px] cursor-pointer items-center justify-center" href={"#"}><CirclePlus size={27} /></Link>
                    <Link className="flex text-[#cdbe91]  py-[7px] cursor-pointer items-center justify-center" href={"#"}><CirclePlus size={27} /></Link>
                    <Link className="flex text-[#cdbe91]  py-[7px] cursor-pointer items-center justify-center" href={"#"}><CirclePlus size={27} /></Link>
                    <Link className="flex text-[#cdbe91]  py-[7px] cursor-pointer items-center justify-center" href={"#"}><CirclePlus size={27} /></Link>
                    <Link className="flex text-[#cdbe91]  py-[7px] cursor-pointer items-center justify-center" href={"#"}><CirclePlus size={27} /></Link>
                    <Link className="flex text-[#cdbe91]  py-[7px] cursor-pointer items-center justify-center" href={"#"}><CirclePlus size={27} /></Link>
                    <Link className="flex text-[#cdbe91] border-t-[1px] border-orange-300  mt-[13px] py-[19px] cursor-pointer items-center justify-center" href={"#"}><CirclePlus size={27} /></Link>
                </div>
                <Link className="flex text-[#cdbe91]  py-[7px] cursor-pointer items-center justify-center" href={"#"}><CirclePlus size={27} /></Link>
            </div>

            <div className="w-full h-full relative flex">
                <div className="flex flex-col min-w-[430px] h-full  justify-between">
                    <div className="flex w-full h-[40px] gap-[5px]">
                        <input type="text" className="h-full w-[250px]" placeholder="buscar" />
                        <select id="type" className="h-full w-[150px]"><option disabled>DIA</option></select>
                    </div>
                    <SpoilsLeft/>
                    <div className="flex h-[70px] w-full  items-end border-t-2 border-orange-500">
                        <div className="flex items-center justify-between w-full">
                            <div className="h-[45px] w-[85px] bg-orange-950 border-2 border-orange-500"> </div>
                            <div className="flex flex-col h-[55px] justify-between items-center text-white"><CirclePlus size={27} /> <p>0</p></div>
                            <div className="flex flex-col h-[55px] justify-between items-center text-white"><CirclePlus size={27} /> <p>0</p></div>
                            <div className="flex flex-col h-[55px] justify-between items-center text-white"><CirclePlus size={27} /> <p>0</p></div>
                            <div className="flex flex-col h-[55px] justify-between items-center text-white"><CirclePlus size={27} /> <p>0</p></div>
                        </div>
                    </div>
                </div>
                
                <SpoilsRight/>
            </div>
        </div>
    )
}