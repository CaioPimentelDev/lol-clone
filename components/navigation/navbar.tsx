import { Circle, CircleAlert, CirclePlus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface NavbarProps {
    ea: number,
    rp: number
}

export const Navbar = ({
    ea,
    rp
}: NavbarProps) => {
    return (
        <div className="fixed h-[100px] w-[82.5vw] flex flex-col z-10">
            <div className="relative flex h-full w-full items-center justify-between px-[40px]"> {/* ajustar o gradiente na imagem principal */}
                <div className="absolute inset-0 h-full w-full border-b-[1px] border-[#3c4444] {/*bg-gradient-to-b from-black bg-opacity-70 to-transparent*/}"></div>
                <div className="flex h-full items-center">
                    <Link href={"/home/lobby"}><button className="relative bg-[#1e2328] border-2 border-[#08bbb5] hover:border-[#5df2ff] w-[200px] h-[50px] cursor-pointer text-[18px] font-medium text-white transition-all">JOGAR</button></Link>

                    <CircleAlert className="mx-[25px] h-[35px] w-[35px] text-blue-300"/>

                    <div className="flex relative h-full">
                        <Link className="flex text-[#cdbe91] font-bold tracking-[2px] h-full px-[22px] hover:bg-gradient-to-t hover:from-white/20 hover:to-transparent hover:from-5% hover:to-50% cursor-pointer items-center justify-center" href={"/home"}>INÍCIO</Link>
                        <Link className="flex text-[#cdbe91] font-bold tracking-[2px] h-full px-[22px] hover:bg-gradient-to-t hover:from-white/20 hover:to-transparent hover:from-5% hover:to-50% cursor-pointer items-center justify-center" href={"#"}>TFT</Link>
                    </div>
                </div>

                <div className="flex h-full items-center">
                    {/* icones da navbar */}
                    <div className="flex relative h-full">
                        <Link className="flex text-[#cdbe91] h-full px-[22px] hover:bg-gradient-to-t hover:from-white/20 hover:to-transparent hover:from-5% hover:to-50% cursor-pointer items-center justify-center" href={"#"}><CirclePlus /></Link>
                        <Link className="flex border-l-2 border-orange-300 text-[#cdbe91] h-full px-[22px] hover:bg-gradient-to-t hover:from-white/20 hover:to-transparent hover:from-5% hover:to-50% cursor-pointer items-center justify-center" href={"#"}><CirclePlus /></Link>
                        <Link className="flex text-[#cdbe91] h-full px-[22px] hover:bg-gradient-to-t hover:from-white/20 hover:to-transparent hover:from-5% hover:to-50% cursor-pointer items-center justify-center" href={"#"}><CirclePlus /></Link>
                        <Link className="flex border-r-2 border-orange-300 text-[#cdbe91] h-full px-[22px] hover:bg-gradient-to-t hover:from-white/20 hover:to-transparent hover:from-5% hover:to-50% cursor-pointer items-center justify-center" href={"#"}><CirclePlus /></Link>
                        <Link className="flex text-[#cdbe91] h-full px-[22px] hover:bg-gradient-to-t hover:from-white/20 hover:to-transparent hover:from-5% hover:to-50% cursor-pointer items-center justify-center" href={"/home/spoils"}><CirclePlus /></Link>
                        <Link className="flex text-[#cdbe91] h-full px-[22px] hover:bg-gradient-to-t hover:from-white/20 hover:to-transparent hover:from-5% hover:to-50% cursor-pointer items-center justify-center" href={"/home/shop"}><CirclePlus /></Link>
                    </div>

                    {/* campos das moedas do jogo */}
                    <div className="relative flex flex-col justify-center items-center h-full">
                        {/* campo de RP */}
                        <div className="flex justify-between p-2 items-center rounded-full border-[1px] border-[#3c4444] bg-[#010a13] w-[145px] h-[35px]">
                            <div className="flex gap-2 items-center">
                                <Image className="h-[20px] w-[20px]" src={"/Rp_icon.webp"} height={0} width={0} alt={"RP"} />
                                <p className="text-white">{ea}</p>
                            </div>
                            <button className="cursor-pointer"><CirclePlus className="text-[#815500] stroke-1" /></button>
                        </div>
                        {/* campo de EA */}
                        <div className="flex justify-start p-2 items-center w-[145px] h-[35px]">
                            <div className="flex gap-2 items-center">
                                <Image className="h-[20px] w-[20px]" src={"/Ea_icon.webp"} height={0} width={0} alt={"EA"} />
                                <p className="text-white">{rp}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}