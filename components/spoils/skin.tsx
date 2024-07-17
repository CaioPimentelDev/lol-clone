import { useModal } from "../hooks/modal-store"

import Image from "next/image"




export const Skin = () => {

    const { onOpen, data } = useModal()


    //console.log(data)

    if (!data) {
        const seila = "seila"
    }

    if (data == undefined) {
        return "dsahdua"
    }
    if (data.image == undefined) {
        return "dsahdua"
    }

    return (
        <div className="relative">
            <div>{data.name}</div>
            <Image src={`/skins/${data.image}`} width={425} height={450} alt={"seila"}/>
            
        </div>
    )
}
