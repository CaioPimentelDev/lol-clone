"use client"

import { Plus, Square } from "lucide-react";
import Link from "next/link";

export default function LobbyPage() {

    return (
        <div className="flex flex-col h-full w-full justify-between">
            <div className="absolute inset-0 h-full w-full bg-[#010a13]">

            </div>
            <div className=" grid grid-cols-4 relative h-[290px] border-b-[1px] border-[#3c4444]">
                <div className="flex flex-col items-center text-white cursor-pointer hover:bg-gradient-to-t hover:from-white/20 hover:to-transparent hover:from-5% hover:to-50%">
                    <button><Square className="h-[120px] w-[120px] m-[15px]" /></button>
                    <p className="mb-[5px]">5x5</p>
                    <span className="text-[30px] font-semibold text-center leading-tight">SUMMUNERS<br /> RIFT</span>
                </div>
                <div className="flex flex-col items-center text-white cursor-pointer hover:bg-gradient-to-t hover:from-white/20 hover:to-transparent hover:from-5% hover:to-50%">
                    <button><Square className="h-[120px] w-[120px] m-[15px]" /></button>
                    <p className="mb-[5px]">5x5</p>
                    <span className="text-[30px] font-semibold text-center leading-tight">ARAM</span>
                </div>
                <div className="flex flex-col items-center text-white cursor-pointer hover:bg-gradient-to-t hover:from-white/20 hover:to-transparent hover:from-5% hover:to-50%">
                    <button><Square className="h-[120px] w-[120px] m-[15px]" /></button>
                    <p className="mb-[5px]">TFT</p>
                    <span className="text-[30px] font-semibold text-center leading-tight">TEAMFIGHT TACTICS</span>
                </div>
                <div className="flex flex-col items-center text-white cursor-pointer hover:bg-gradient-to-t hover:from-white/20 hover:to-transparent hover:from-5% hover:to-50%">
                    <button><Square className="h-[120px] w-[120px] m-[15px]" /></button>
                    <p className="mb-[5px]">5x5</p>
                    <span className="text-[30px] font-semibold text-center leading-tight">TODOS POR UM</span>
                </div>
            </div>




        </div>
    )
}