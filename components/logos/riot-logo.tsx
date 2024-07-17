"use client"

import Image from "next/image";
import Link from "next/link";

export const RiotLogo = () => {
    return (
        <div className="mb-[160px] z-10">
            <Link href={"/"}><Image className="absolute top-[48px] left-[48px] z-10" src={"/lol-logo.png"} height={54} width={132} alt={"logo"} /></Link>
            
        </div>
    )
}