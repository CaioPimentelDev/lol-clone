import axios from "axios"
import Image from "next/image"
import { useModal } from "../hooks/modal-store"



export const Chest = () => {

    const { onOpen, data } = useModal()


    const handleSubmit = async () => {
        const response = await axios.patch("/api/spoils")


        const image = response.data.image

        const name = response.data.name

        onOpen("skin", { image, name })
    }

    return (
        <div className="flex flex-col items-center justify-around">
            <span className="text-[22px] font-semibold">BAÚ HEXTEC</span>
            <Image src={"/chest.png"} height={425} width={425} alt={"chest"} />
            <button className="bg-slate-600 px-4 py-2 border-2 border-[#a27a2e] text-[#dfc38a] hover:border-[#dfc38a]" onClick={handleSubmit}>abrir</button>
        </div>
    )
}