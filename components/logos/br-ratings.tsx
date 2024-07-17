import Image from "next/image";

export const BrRatings=()=>{
    return(
        <div className="w-full flex z-10 justify-start">
                <Image src={"/riotgames-logo-new.svg"} height="0" width="0" alt={"riot games logo"} className="w-[132px] h-auto mx-7" />
                <div className="flex gap-1">
                    <Image src={"/br-ratings-logo.png"} height={100} width={100} alt={"br ratings"} />

                    <div className="flex flex-col h-[100px] text-sm text-white">
                        <div>Violência</div>
                        <div>Conteúdo Sexual</div>
                        <div>Linguagem Imprópria</div>
                        <div>Compras On-line</div>
                        <div>Interação de Usuários</div>
                    </div>
                </div>
            </div>
    )
}